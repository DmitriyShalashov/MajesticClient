

interface propsLobbyUser{
    name:string
    disabled:boolean
    ready:boolean
    changeReady:(ready:boolean)=>void
}

function LobbyUser({name,disabled,ready,changeReady}:propsLobbyUser) {
    const readyHandler=()=>{
        changeReady(!ready)
    }
    return ( 
        <div className="w-[320px] items-center flex justify-between text-white py-[10px] px-[20px] text-[20px] my-[20px] bg-sky-800 rounded-[10px]">
            <p>{name}</p>
            <button disabled={disabled} className="p-[10px] rounded-[10px]" onClick={readyHandler} style={{background:ready===false?"gray":"MediumSlateBlue"}}>Готов</button>
        </div>
     );    
}

export default LobbyUser;   