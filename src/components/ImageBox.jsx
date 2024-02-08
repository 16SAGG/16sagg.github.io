import { useEffect, useState } from "react"
import { Skeleton } from "./Skeleton"

export const ImageBox = ({image, id = "image-0"})=>{
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() =>{
        const imageBox = document.getElementById(id)
        const imageBoxIsComplete = imageBox.complete === true
        if (imageBoxIsComplete) setIsLoading(false)
    }, [])

    return(
        <div
            className="
                overflow-hidden
                rounded-xl
                h-full
                w-full
                relative
            "
        >
            <img
                id={id}
				loading="lazy"
				decoding="async"
				className ="
				    w-full
				    h-full
					object-cover
					rounded-xl
                    duration-200
				"
                style={{
                    opacity : (isLoading) ? "0" : "1",
                }}
				src={image}
            />
            <Skeleton isLoading={isLoading}/>
        </div>
    )
}