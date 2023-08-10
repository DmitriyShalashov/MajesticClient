interface propsUnit{
    avatar:File
    fraction:string
}

function Unit({fraction}:propsUnit) {

    return ( 
        <div className="p-[5px]">
            <img src="" className="w-[150px] h-[70px]" alt="" />
        </div>
     );
}

export default Unit;