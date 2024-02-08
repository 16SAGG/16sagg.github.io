import { Github } from "../media/icons/Github";
import { Css } from "../media/icons/Css";
import { React } from "../media/icons/React";
import { HTML } from "../media/icons/HTML";
import { Tailwind } from "../media/icons/Tailwind";
import { JavaScript } from "../media/icons/JavaScript";
import { AstroIcon } from "../media/icons/AstroIcon";
import { Python } from "../media/icons/Python";
import { Django } from "../media/icons/Django";

const icons = {
    "GitHub" : Github,
    "CSS" : Css,
    "React" : React,
    "HTML" : HTML,
    "Tailwind" : Tailwind,
    "Django" : Django,
    "JavaScript" : JavaScript,
    "Astro" : AstroIcon,
    "Python" : Python
}

export const IconBox = ({iconName = "GitHub"}) =>{
    const CurrentIcon = icons[iconName]
    return(
        <div
            className="
            px-9
            py-6
            flex
            flex-col
            "
        >
            <div
                className="
                icon-container
                "
            >
                <CurrentIcon/>
            </div>
            <p
                className="
                icon-text
                text-center
                "
            >
                {iconName}
            </p>
        </div>
    )
}
