import { useStore } from '@nanostores/react';
import { isEnglishModeActive } from "../stores/languageStore"

import { discordData } from "../data/contact";
import {Discord} from "../media/icons/Discord.jsx";
        
export const DiscordOnline = ({status = "loading"})=>{
    const $isEnglishModeActive = useStore(isEnglishModeActive)

    const content = ($isEnglishModeActive) ? discordData[status].english : discordData[status].spanish

    return(
        <a 
            className="
            flex
            flex-col
            gap-4
            justify-center
            items-center
            px-12
            rounded-xl
            transition-all
            select-none
            bg-red-600

            hover:scale-105

            md:col-start-1
            md:row-start-3"
        >
            <div
                className="
                text-white
                "
            >
                <Discord/>
            </div>
            
            <p 
                className="
                text-white
                font-medium
                "
            >
                {content}
            </p>
        </a>
    )
}



