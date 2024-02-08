import { useStore } from '@nanostores/react';
import { projectsInterface } from '../../data/projects';

import { isEnglishModeActive } from "../../stores/languageStore"

import { CircleArrow } from '../../media/icons/Arrow';
import {  DoubleStar } from '../../media/icons/Star';

export const ProjectsLink = ({isLink = true}) =>{
    const $isEnglishModeActive = useStore(isEnglishModeActive)

    const title = ($isEnglishModeActive) ? projectsInterface.title.english : projectsInterface.title.spanish
    return(
        <div
            className="
                flex
                px-3
                py-5
                gap-2
                h-full

                md:flex-col
            "
        >
            <div
                className="
                flex
                flex-grow
                relative

                md:flex-col
                "
            >
                <div
                    className="
                    first-star
                    absolute
                    right-32
                    bottom-14

                    md:bottom-28
                    md:right-40
                    "
                >
                    <DoubleStar scale={0.3}/>
                </div>

                <div
                    className="
                    first-star
                    absolute
                    left-8
                    top-2

                    md:top-32
                    md:left-[-2px]
                    "
                >
                    <DoubleStar scale={1}/>
                </div>
            
                <div
                    className="
                    second-star
                    absolute
                    right-[256px]
                    bottom-[176px]

                    md:bottom-[232px]
                    md:right-[280px]
                    "
                >
                    <DoubleStar scale={0.3} />
                </div>

                <div
                    className="
                    second-star
                    absolute
                    left-[-88px]
                    top-[-112px]

                    md:top-[8px]
                    md:left-[-122px]
                    "
                >
                    <DoubleStar scale={1}/>
                </div>
            </div>

            {(isLink) ? 
                <div
                    className="
                    flex
                    flex-row-reverse
                    items-end
                    text-2xl
                    font-medium
                    gap-2
                    min-w-[148px]
                    "
                >
                    <CircleArrow/> 
                    <p>
                        {title}   
                    </p>
                </div>
            :
                <div
                    className="
                    flex
                    flex-row-reverse
                    items-end
                    text-2xl
                    font-medium
                    gap-2
                    min-w-[148px]
                    "
                >
                    <h1>
                        {title}   
                    </h1>
                </div>
            }
        </div>
    )
}

