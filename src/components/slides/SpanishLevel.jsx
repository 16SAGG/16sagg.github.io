import { useStore } from '@nanostores/react';

import { moreItemsData } from "../../data/about"

import { isEnglishModeActive } from "../../stores/languageStore"

export const SpanishLevel = ()=>{
    const $isEnglishModeActive = useStore(isEnglishModeActive)

    const head = ($isEnglishModeActive) ? moreItemsData.spanishLevel.english : moreItemsData.spanishLevel.spanish

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
                font-medium
                text-xl
                "
            >
                {head}
            </p>
            <p 
                className="
                font-bold
                text-6xl
                text-center

                md:text-7xl
                "
            >
                NAT
            </p>
        </div>
    )
}