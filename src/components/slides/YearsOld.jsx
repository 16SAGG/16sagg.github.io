import { useStore } from '@nanostores/react';

import { moreItemsData } from "../../data/about"

import { isEnglishModeActive } from "../../stores/languageStore"

export const YearsOld = ()=>{
    const $isEnglishModeActive = useStore(isEnglishModeActive)

    const head = ($isEnglishModeActive) ? moreItemsData.age.head.english : moreItemsData.age.head.spanish
    const content = ($isEnglishModeActive) ? moreItemsData.age.content.english : moreItemsData.age.content.spanish
    
    return(
        <div
            className="
            p-3
            h-full
            flex
            items-center
            justify-center
            flex-col
            "
        >
            <p
                className="
                font-bold
                text-6xl
                text-center

                md:text-7xl
                "
            >
                {head}
            </p>
            <p 
                className="
                font-medium
                text-xl
                "
            >
                {content}
            </p>
        </div>
    )
}