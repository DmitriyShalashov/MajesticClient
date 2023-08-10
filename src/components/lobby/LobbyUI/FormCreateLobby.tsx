import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { useCreateLobbyMutation } from "../../../store/api/LobbyApi";
import LobbyButton from "../../UI/Button/LobbyButton";

function FormCreateLobby() {
    const [createNewLobby]=useCreateLobbyMutation()
    const navigate=useNavigate()
    const [lobbyName,setLobbyName]=useState("")
    const createLobby=()=>{
        const lobbyId=Date.now().toString(10).slice(8)
        createNewLobby({id:Number(lobbyId), name:lobbyName})
        setTimeout(()=>{
            navigate(`${lobbyId}`)
        },200)
    }
    return ( 
        <div className="w-[400px] h-fit p-[20px] rounded-[10px] bg-gray-500">
            <h2>Создать лобби</h2>
            <input className="border w-full p-[5px] my-[20px] text-black" placeholder="Название" onChange={(e)=>setLobbyName(e.target.value)}/>
            <div className="flex w-fit justify-between gap-[15px]">
                <p>Закрытое лобби</p>
                <input type="checkbox"/>
            </div>
            <input className="border w-full p-[5px] my-[20px] text-black" placeholder="Пароль" onChange={(e)=>setLobbyName(e.target.value)}/>
            <LobbyButton clickFunc={createLobby} text="Создать" color="blue"/>
        </div>
     );
}

export default FormCreateLobby;