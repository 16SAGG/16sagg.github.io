import { useEffect, useState } from "react"

import { getTechnologiesList } from "../../utilities/getTechnologiesList.js"

import { useStore } from '@nanostores/react';

import { showingProjectsOf } from "../../stores/ProjectsStore.js";

export const ShowingProjectsOf = ()=>{
    const [technologiesList, setTechnologiesList] = useState([])
    const $showingProjectsOf = useStore(showingProjectsOf)

    useEffect(()=> {
        setTechnologiesList(getTechnologiesList())

        const technologyFromHash = window.location.hash
        const technologyFromHashIsVoid = technologyFromHash === ""
        if (technologyFromHashIsVoid) return
        onClickHandle(technologyFromHash.slice(1))
    },[])

    const onClickHandle = (newValue)=> showingProjectsOf.set(newValue)

    return(
        <DropDown technologiesList={technologiesList} onClickHandle={onClickHandle} $showingProjectsOf={$showingProjectsOf}/>
    )
}

const DropDown = ({technologiesList = [], onClickHandle = ()=>{},$showingProjectsOf = ""}) =>{
    return(
        <div 
            className="
            dropdown
            h-full
            w-full
            relative
            "
        >
            <div 
                className="
                h-full
                w-full
                text-gray-200 
                font-bold 
                text-3xl 
                text-center 
                flex
                flex-col
                items-center
                justify-center
                gap-7
                px-3
                pt-3
                pb-[30px]

                md:text-4xl
                "
            >
                <ul className=" text-sm w-full rounded-t-xl overflow-y-scroll overflow-x-hidden text-gray-200"> 
                    <li>
                        <button
                            onClick={()=> onClickHandle("All")}

                            className="
                            block 
                            px-4 
                            py-2
                            w-full
                            text-left
                            text-gray-600

                            dark:text-gray-400
                                        
                            hover:text-[#FDFDFD]
                            dark:hover:text-[#FDFDFD]
                            hover:bg-gray-600 
                            "
                        >
                            All
                        </button>
                    </li>
                    {
                        technologiesList.map((technology)=>
                            <li key={technology}>
                                <button
                                    onClick={()=> onClickHandle(technology)}

                                    className="
                                    block 
                                    px-4 
                                    py-2
                                    w-full
                                    text-left
                                    text-gray-600

                                    dark:text-gray-400
                                    
                                    hover:text-[#FDFDFD]
                                    dark:hover:text-[#FDFDFD]
                                    hover:bg-gray-600 
                                    ">
                                        {technology}
                                </button>
                            </li>
                        )
                    }
                    
                    <li className="block py-[6px]"></li>
                </ul>
            </div>

            <div 
                className="
                dropdown-cover
                absolute
                top-0
                h-full
                w-full
                z-10
                shadow-2xl
                text-[#FDFDFD]
                font-bold 
                rounded-xl
                text-3xl 
                text-center 
                bg-[#7256FF]
                flex
                flex-col
                items-center
                justify-center
                gap-7

                md:text-4xl

                dark:bg-gradient-to-b from-[#344399] to-[#7256FF]
                "
            >
                <div className="flex-grow"></div>
                <h2>
                    {$showingProjectsOf}
                </h2>
                <svg className="flex-grow w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </div>
        </div>
    )
}