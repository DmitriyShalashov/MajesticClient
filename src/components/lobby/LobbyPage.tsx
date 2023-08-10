import jwtDecode from "jwt-decode";
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { IUser } from "../../consts/types";
import LobbyButton from "../UI/Button/LobbyButton";
import LobbyUser from "./LobbyUI/LobbyUser";

function LobbyPage() {
    const token=localStorage.getItem("token")||''
    const user:IUser=jwtDecode(token)
    const params=useParams()
    const navigate=useNavigate()
    const [players, setPlayers]=useState<IUser[]>([])
    const [clientReady, setClientReady]=useState(false)
    const [countReady,setCountReady]=useState(0)
    const socket=io("ws://localhost:4000",{
            extraHeaders:{
            "my-custom-header":"abcd"
            },
    })

    const disconnectUserHandler=()=>{
        socket.emit("disconnectFromRoom",{lobbyId:params.id,userId:user.id})
        socket.close()
        setTimeout(()=>{
            navigate("/lobby")
        },200)
    }   
    const readyHandler=(res:IUser[])=>{
        setPlayers(res)
        let curr=0
        for(const i of res){
            if(i.ready===true){
                curr+=1
            }
        }
        setCountReady(curr)
    }
    useEffect(()=>{
        socket.emit("connectToRoom",{lobbyId:params.id, userId:user.id})
        socket.on("lobbyChange",(res:IUser[])=>readyHandler(res))
    },[])

    useEffect(()=>{
        socket.emit("readyUsers",{lobbyId:params.id, userId:user.id,ready:clientReady})
    },[clientReady])
    return ( 
        <div className="p-[200px] bg-slate-600 h-screen text-white">
            <p className="mb-[10px] text-[24px]">Номер комнаты - {params.id}</p>
            <div className="my-[10px]">Готовность - {countReady} / {2}</div>
            <p className="mb-[10px]">Игроки</p>
            {
                players&&players.map((item)=>
                    <div key={item.id}><LobbyUser disabled={user.id!==item.id} ready={item.ready} name={item.name} changeReady={setClientReady}/></div>
                )
            }
            
            <LobbyButton color="brown" text="Выйти из лобби" clickFunc={disconnectUserHandler}/>
        </div>
     );
}

export default LobbyPage;