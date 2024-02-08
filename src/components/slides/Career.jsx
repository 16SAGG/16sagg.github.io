import { useStore } from '@nanostores/react';

import { moreItemsData } from "../../data/about"

import { isEnglishModeActive } from "../../stores/languageStore"

export const Career = () =>{
    const $isEnglishModeActive = useStore(isEnglishModeActive)

    const head = ($isEnglishModeActive) ? moreItemsData.career.head.english : moreItemsData.career.head.spanish
    const content = ($isEnglishModeActive) ? moreItemsData.career.content.english : moreItemsData.career.content.spanish

    return(
        <div
            className="
            p-3
            h-full
            flex
            items-center
            justify-center
            "
        >
            {($isEnglishModeActive) ?
                <div>
                    <p
                        className="
                        font-medium
                        text-xl
                        text-center
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
                        {content}
                    </p>
                </div>
            :
                <div>
                    <p 
                        className="
                        font-bold
                        text-6xl
                        text-center

                        md:text-7xl
                        "
                    >
                        {content}
                    </p>
                    <p
                        className="
                        font-medium
                        text-xl
                        text-center
                        "
                    >
                        {head}
                    </p>
                </div>
            }
        </div>
    )
}