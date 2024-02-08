import { useStore } from '@nanostores/react';

import { isEnglishModeActive } from "../stores/languageStore"


export const Paragraph = ({paragraphEN = "Paragraph", paragraphES = "Párrafo"}) =>{
    const $isEnglishModeActive = useStore(isEnglishModeActive)

    const paragraph = ($isEnglishModeActive) ? paragraphEN : paragraphES
    
    return(
        <p>
            {paragraph}
        </p>
    )
}