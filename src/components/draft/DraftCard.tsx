interface propsDraftCard{
    id:number
    bg:string
    name:string
    cost:number
    isPeak:boolean
    setIsPeak:(id:number)=>void
    img:string
}

function DraftCard({bg, name, cost,isPeak,setIsPeak,id,img}:propsDraftCard) {
    return ( 
        <div className="border-4 cursor-pointer hover:animate-pulse p-[5px] w-fit relative mb-[20px]" 
        style={{background:bg,borderColor:isPeak===true?"lime":"transparent"}}
        onClick={()=>setIsPeak(id)}
        >
            <img className="w-[150px] mb-[5px]" alt=""
            src={img}/>
            <div className="flex w-full items-center justify-between">
                <div className="font-['Tektur'] font-medium leading-[18px]  text-white text-[16px] ">{name}</div>
                <div className="font-['Tektur'] font-bold text-[18px] text-white">{cost}</div>
            </div>
            <div className="rounded-[50%] w-[30px] h-[30px] absolute right-[-10px] top-[-10px]" style={{background:bg}}></div>
        </div>
     );
}

export default DraftCard;