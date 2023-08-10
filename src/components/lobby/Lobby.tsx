
import React from 'react'; 
import {  useGetAllLobbiesQuery } from "../../store/api/LobbyApi";
import LobbyItem from "./LobbyItem";
import FormCreateLobby from './LobbyUI/FormCreateLobby';

function Lobby() {
    const {data:lobbies}=useGetAllLobbiesQuery(null)
    const refreshHandler=()=>{
        window.location.reload()
    }
    return ( 
        <div className="bg-black h-screen">
            <div className="p-[50px] m-auto w-[1200px] text-white h-screen bg-gray-800">
                <div className='flex justify-between w-full'>
                    <div>
                        <div className="flex w-[400px] justify-between items-center">
                            <h2 className="text-[32px]">Список лобби</h2>
                            <p className="text-[14px] text-gray-400 cursor-pointer" onClick={refreshHandler} >Обновить</p>
                        </div>
                        {
                            lobbies&&lobbies.map((item)=>
                                <LobbyItem name={item.name} limit={item.limit} users={item.users} id={item.id} key={item.id}/>
                            )
                        }
                    </div>
                    <FormCreateLobby/>
                </div>
                
            
            </div>
            
        </div>
     );
}

export default Lobby;