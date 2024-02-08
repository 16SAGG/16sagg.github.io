import { useEffect, useState } from "react";
import Me from "../media/images/Me.png";
import { Skeleton } from "./Skeleton";

const backgrounds = [
    "portrait-radial-gradient",
    "portrait-repeating-radial-gradient",
    "portrait-repeating-conic-gradient",
]

export const MePortrait = ()=>{
    const [isLoading, setIsLoading] = useState(true)
    let currentBackground = 0

    useEffect(() =>{
        const portraitImage = document.getElementById("portrait-image")
        const portraitImageIsComplete = portraitImage.complete === true
        if (portraitImageIsComplete) setIsLoading(false)
    }, [])

    const changeBackground = ()=>{
        const portrait = document.getElementById("me-portrait")
        portrait.classList.remove(backgrounds[currentBackground])
        if (currentBackground + 1 < backgrounds.length){
            currentBackground += 1
        }
        else {
            currentBackground = 0
        }
        portrait.classList.add(backgrounds[currentBackground])
        console.log(currentBackground)
    }

    return(
        <div 
            className="
                overflow-hidden
                rounded-full
                h-full
                w-full
                relative
            "
        >
            <button
                id = "me-portrait"
                className="
                    portrait-radial-gradient
                    p-1
                    duration-100

                    hover:p-0
                "
                onClick={() => changeBackground()}
                style={{
                    opacity : (isLoading) ? "0" : "1",
                }}
            >
                <img
                    id="portrait-image"
                    loading="lazy"
                    decoding="async"
                    className="
                        w-full
                        h-full
                        object-cover
                        opacity-95
                        rounded-full
                    "
                    src={Me.src}
                />
            </button>
            <Skeleton isLoading={isLoading}/>
        </div>
    )
}