import { useStore } from '@nanostores/react';

import { moreItemsData } from "../../data/about"

import { isEnglishModeActive } from "../../stores/languageStore"

export const ProjectsCreated = ()=>{
    const $isEnglishModeActive = useStore(isEnglishModeActive)

    const head = ($isEnglishModeActive) ? moreItemsData.projectsCreated.head.english : moreItemsData.projectsCreated.head.spanish
    const content = ($isEnglishModeActive) ? moreItemsData.projectsCreated.content.english : moreItemsData.projectsCreated.content.spanish

    return(
        <div
            className="
            p-3
            h-full
            flex
            gap-2
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
                font-semibold
                text-sm

                md:text-lg
                "
            >
                {content}
            </p>
        </div>
    )
}
