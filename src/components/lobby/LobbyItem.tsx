
import  React from 'react';
import { ILobby } from '../../consts/types';
import LobbyButton from '../UI/Button/LobbyButton';
import { Link } from 'react-router-dom';

const LobbyItem:React.FC<ILobby>=({name,id,limit,users})=>{
    return ( 
        <div className='w-[400px] p-[10px] my-[10px] flex items-center justify-between bg-gray-500 text-white'>
            <div className='text-[20px]'>{name}</div>
            <div className='flex items-center gap-[20px]'>
                <p>{users.length} / {limit}</p>
                <Link to={`${id}`}><LobbyButton text='Присоединиться' color='blue'/></Link>
            </div>
        </div>
     );
}

export default LobbyItem;