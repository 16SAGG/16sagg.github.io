import { useStore } from '@nanostores/react';

import { isEnglishModeActive } from "../stores/languageStore"

export const Title = ({titleEN = "Title", titleES = "Título"}) =>{
    const $isEnglishModeActive = useStore(isEnglishModeActive)

    const title = ($isEnglishModeActive) ? titleEN : titleES
    
    return(
        <div
            className="
                h-full
                flex
                justify-center
                items-center
                p-2
            "
        >
            <h1
                className="
                    text-wrap
                    text-2xl
                    font-bold
                    text-center
                "
            >
                {title}
            </h1>
        </div>
    )
}