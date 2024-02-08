import { useState } from "react"
import { Copy } from "../media/icons/Copy"
import { CopyCheck } from "../media/icons/CopyCheck"

export const CopyButton = ({text = ""}) =>{
    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard =()=>{
        navigator.clipboard.writeText(text)

        setIsCopied(true)
    }

    return(
        <button
            onClick={() => copyToClipboard()}
        >
            {
                (isCopied) ?
                    <CopyCheck/>
                :
                    <Copy/>
            }
        </button>
    )
}