import LobbyButton from "../UI/Button/LobbyButton";
import DraftCard from "./DraftCard";
import { useState } from "react";

function Draft() {
    const [peakCardId,setPeakCardId]=useState<number|null>(null)

    return ( 
        <div className="w-full h-screen bg-black ">
            <div className="w-[1200px] h-screen bg-slate-600 m-auto p-[50px] relative">
                <h2 className="text-[32px] text-white mb-[20px]">Выбери лидера</h2>
                <DraftCard bg="SteelBlue" name="Тот" cost={3} isPeak={peakCardId===1} id={1} setIsPeak={setPeakCardId}
                img="https://static.wixstatic.com/media/af1176_0171d071131348f39990598f1a125b8b~mv2.png/v1/fill/w_933,h_1165,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4%5B1%5D.png"/>
                <DraftCard bg="DarkSlateGrey" name="Анубис" cost={2} isPeak={peakCardId===2} id={2} setIsPeak={setPeakCardId}
                img="https://static.wixstatic.com/media/af1176_5ca3bed4433446f5a2398d418a5f920d~mv2.png/v1/fill/w_925,h_1156,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6%5B1%5D.png"/>
                <div className="absolute bottom-[50px] left-[50px]">
                    <LobbyButton color="Blue" text="Выбрать лидера" disabled={peakCardId===null}/>
                </div>
            </div>
        </div>
     );
}

export default Draft;