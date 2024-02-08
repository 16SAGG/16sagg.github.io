import { Career } from "./slides/Career"
import { YearsOld } from "./slides/YearsOld"
import { ProjectsCreated } from "./slides/ProjectsCreated"
import { EnglishLevel } from "./slides/EnglishLevel"
import { Slider } from "./Slider"
import { Direction } from "./slides/Direction"
import { SpanishLevel } from "./slides/SpanishLevel"

const slides = [
    <Career/>,  <ProjectsCreated/>, 
    <SpanishLevel/>, <EnglishLevel/>,
    <YearsOld/>, <Direction/>
]

export const More = ()=>{
    return(
        <Slider slides={slides}/>
    )
}