interface btnProps{
    text:string
    color:string
    clickFunc?:()=>void
    disabled?:boolean
}

function LobbyButton({text,color,disabled,clickFunc}:btnProps) {
    return ( 
        <button disabled={disabled} onClick={clickFunc} className={`rounded-[5px] px-[20px] py-[10px] text-white`} style={{background:color}}>{text}</button>
     );
}

export default LobbyButton;