import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';

import { isEnglishModeActive } from "../../stores/languageStore"
import { showingProjectsOf } from '../../stores/ProjectsStore';

import { Skeleton } from '../Skeleton';

export const ProjectItem = ({id="", title = {}, image, technologies = []})=>{
    const $isEnglishModeActive = useStore(isEnglishModeActive)
    const $showingProjectsOf = useStore(showingProjectsOf)
    const [isLoading, setIsLoading] = useState(true)

    const $title = ($isEnglishModeActive) ?  title.english : title.spanish
    const projectCanBeShown = $showingProjectsOf === "All" || technologies.find((technology) => technology.name === $showingProjectsOf) !== undefined

    const customId=`project-item-img-${id}`

    useEffect(() =>{
        const projectImage = document.getElementById(customId)
        const projectImageIsComplete = projectImage.complete === true
        if (projectImageIsComplete) setIsLoading(false)
    }, [])

    return(
        <a 
            href={`/projects/${id}`}
            className="
            rounded-xl
            select-none
            bg-[#FDFDFD]
            text-[#0F0F12]
            project-item
            relative 
            h-full
            w-full
            text-md
            font-medium
            overflow-hidden
            px-3
            py-2
            leading-5

            dark:bg-[#1D1C20]
            dark:text-[#FDFDFD]

            md:text-lg
            md:py-3
            md:leading-[22px]
            "
            style={{
                display : (projectCanBeShown) ? "block" : "none"
            }}
        >
            <div
                style={{
                    opacity : (isLoading) ? "0" : "1",
                }}
            >
                <p>{$title}</p>
            </div>
                    
            <div
                className="
                project-item-image
                absolute
                h-full
                w-full
                top-0
                left-0
                "
                style={{
                    opacity : (isLoading) ? "0" : "1",
                }}
            >
                <img
                    id={customId}
                    loading="lazy"
                    decoding="async"
                    className="
                        w-full
                        h-full
                        object-cover
                        rounded-xl
                    "
                    src={image}
                />
            </div>

            <Skeleton isLoading = {isLoading}/>
        </a> 
    )
}