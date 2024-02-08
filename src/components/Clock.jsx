import '../styles/kirby.css';
import '../styles/pikachu.css';
import { useState } from "react"

export const Clock = ()=>{
    const arts = ["kirby", "pikachu"]
    let currentArt = 0
    let today = new Date()

    let caracasTime = today.toLocaleString("es-VE", {
        timeZone: "America/Caracas",
        hour12: false
    })
    
    const regexHrMinSec = /(\d{1,2}):(\d{1,2}):(\d{1,2})/

    const [hours, setHours] = useState(regexHrMinSec.exec(caracasTime)[1])
    const [minutes, setMinutes] = useState(regexHrMinSec.exec(caracasTime)[2])
    
    const clockUpdate = () =>{
        today = new Date()
        caracasTime = today.toLocaleString("es-VE", {
            timeZone: "America/Caracas",
            hour12: false
        })
        
        setHours(regexHrMinSec.exec(caracasTime)[1])
        setMinutes(regexHrMinSec.exec(caracasTime)[2])
    }

    console.log()

    const changePixelArt = () =>{
        const pixelArt = document.getElementById("pixel-art")
        pixelArt.classList.remove(arts[currentArt])
        if (currentArt + 1 < arts.length){
            currentArt += 1
        } else{
            currentArt = 0
        }
        pixelArt.classList.add(arts[currentArt])
    }

    setInterval(clockUpdate)

    return(
        <button
            onClick={()=>changePixelArt()}
            className="
                grid
                h-full
                w-full
                font-bold
                text-5xl
                grid-rows-1
                grid-cols-1
                rounded-xl
                overflow-hidden

                md:text-6xl
            "
        >
            <div
                className="
                    time-display
                    duration-300
                    row-start-1
                    col-start-1
                    z-10
                    self-center
                "
            >
                <span>{hours}</span>
                <span className="flickering">:</span>
                <span>{minutes}</span>
            </div>
            <div 
                id="pixel-art"
                className="
                    kirby
                    duration-300
                    row-start-1
                    col-start-1
                "
            ></div>
        </button>
    )
}



