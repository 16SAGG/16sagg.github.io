import { useState } from "react"

export const ItemsSwitcher = ({items = []})=>{
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    const CurrentItem = items[currentItemIndex]

    const onClickHandle = (newValue) =>{
        const newValueIsInvalid = newValue >= items.length - 1
        if (newValueIsInvalid) setCurrentItemIndex(0)
        else setCurrentItemIndex(newValue + 1)
    }

    return(
        <button
            className="
            h-full
            w-full
            "

            onClick={() => onClickHandle(currentItemIndex)}
        >
            {CurrentItem}
        </button>
    )
}