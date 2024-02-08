import { useEffect, useState } from "react";

import { useStore } from '@nanostores/react';

import { isEnglishModeActive } from "../stores/languageStore.js";

import {Moon} from "../media/icons/Moon.jsx"
import {Sun} from "../media/icons/Sun.jsx"

import { colors } from "../colors.js";

import {Toggle} from "./Toggle.jsx";

export const Settings = ()=>{
    return(
        <section
            className="
            rounded-xl
            transition-all
            select-none
            h-full
            bg-[#FDFDFD]

            dark:border-2
            dark:border-[#7256FF]
            dark:bg-transparent

            hover:scale-105
            "
        >
            <div
                className="
                flex
                flex-col
                gap-10
                justify-center
                items-center
                h-full

                md:gap-12
                "
            >
                <CurrentLanguage/>

                <CurrentTheme/>
            </div>
        </section>
    )
}

const CurrentLanguage = () =>{
    const $isEnglishModeActive = useStore(isEnglishModeActive)
    
    useEffect(()=>{
        const LS_isEnglishModeActive = localStorage.getItem("is-english-mode-active") === "true"
        onChangeHandle(LS_isEnglishModeActive)
    }, [])

    const onChangeHandle = (newValue) =>{
        isEnglishModeActive.set(newValue)
        localStorage.setItem("is-english-mode-active", newValue)
    }

    return(
        <Toggle
            leftState= {<TextStateSymbol 
                text='ES'
                color={($isEnglishModeActive) ? "gray" : colors.red}
                />} 
            rightState= {<TextStateSymbol 
                text='EN'
                color={($isEnglishModeActive) ? colors.blue : "gray"}
                />}
            peerBackground={($isEnglishModeActive) ? colors.blue : colors.red}
            value= {$isEnglishModeActive}
            onChange= {onChangeHandle}
        />
    )
}

const CurrentTheme = () =>{
    const [isDarkModeActive, setIsDarkModeActive] = useState(true)

    useEffect(()=>{
        const LS_isDarkModeActive = localStorage.getItem("is-dark-mode-active") === "true"
        onChangeHandle(LS_isDarkModeActive)
    }, [])

    const onChangeHandle = (newValue) =>{
        setIsDarkModeActive(newValue)
        changeTheme(newValue)
        localStorage.setItem("is-dark-mode-active", newValue)
    }

    const changeTheme = (isDarkModeActive)=>{
        if(isDarkModeActive) document.querySelector('body').classList.add("dark")
        else document.querySelector('body').classList.remove("dark")
    }

    return(
        <Toggle 
            leftState={<IconStateSymbol 
                icon={<Sun/>}
                color={(isDarkModeActive) ? "gray" : colors.yellow}
                />}
            rightState={<IconStateSymbol 
                icon={<Moon/>} 
                color={(isDarkModeActive) ? colors.pink : "gray"}
                />}
            peerBackground={(isDarkModeActive) ? colors.pink : colors.yellow}
            value= {isDarkModeActive}
            onChange= {onChangeHandle}
        />    
    )
}

const TextStateSymbol = ({text = 'EN', color = 'gray'}) =>{
    return(
        <span 
            className="
            text-center
            text-lg
            font-medium 
            w-7
            h-7
            "
            style={{color: color}}
        >
            {text}
        </span>
    )
}

const IconStateSymbol = ({icon = <svg></svg>, color = 'gray'})=>{
    return(
        <span 
            className="
            flex
            items-center
            justify-center
            w-7
            h-7
            "
            style={{color: color}}
        >
            {icon}
        </span>
    )
}