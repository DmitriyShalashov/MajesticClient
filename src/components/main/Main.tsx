import { useState } from "react";
import { useLoginMutation } from "../../store/api/AuthApi";
import { PostLog } from "../../consts/types";
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate=useNavigate()
    const [log] =useLoginMutation()
    const [loguser,setLogUser]=useState({} as PostLog)
    const login=()=>{
        log(loguser).unwrap().then((data)=>{
            setTimeout(()=>{
                navigate("/lobby")
            },1000)
            localStorage.setItem("token",data.token)
        })
        .catch((e:any)=>{
            console.log(e.data.message)
        })
        
    }
    return ( 
        <div className="w-full">
            <div className="w-fit m-auto mt-[200px]">
                <input className="border-2 p-[20px]" placeholder="Email" onChange={(e)=>setLogUser({...loguser,email:e.target.value})}></input>
                <input className="border-2 p-[20px]" placeholder="Пароль" onChange={(e)=>setLogUser({...loguser,password:e.target.value})}></input>
                <button className="border-2 p-[20px] bg-teal-600 text-white" onClick={login}>Войти</button>
            </div>
            
        </div>
     );
}

export default Main;