import { useStore } from '@nanostores/react';

import { about } from "../data/about"

import { isEnglishModeActive } from "../stores/languageStore"
import { Github } from '../media/icons/Github';
import { Linkedin } from '../media/icons/Linkedin';
import { MePortrait } from './MePortrait';

export const About = ()=>{
    const $isEnglishModeActive = useStore(isEnglishModeActive)

    const head = ($isEnglishModeActive) ? about.head.english : about.head.spanish
    const content = ($isEnglishModeActive) ? about.content.english : about.content.spanish

    return(
        <div
            className="
            flex
            h-full
            flex-col
            p-3

            gap-5
            md:p-5
            "
        >
            <div
                className="
                flex
                gap-5
                "
            >
                <div 
                    className="
                        flex
                        grow
                    "
                >
                        <h1 
                            className="
                            self-center
                            text-wrap
                            font-semibold
                            text-xl

                            md:text-2xl
                            "
                        >
                            {head}
                        </h1>
                </div>
                <div 
                    className="
                        min-w-[80px]
                        min-h-[80px]
                        max-w-[80px]
                        max-h-[80px]

                        md:min-w-[120px]
                        md:min-h-[120px]
                        md:max-h-[120px]
                    "
                >
                    <MePortrait/>
                </div>
            </div>
            <div
                className="grow"
            >
                <p>
                    {content}
                </p>
            </div>
            <div
                className="
                    flex
                    justify-center
                    gap-20
                    min-h-[24px]
                "
            >
                <a
                    target="_blank"
                    href="https://github.com/16SAGG"
                    className="
                        duration-200

                        hover:text-[#344399]
                        dark:hover:text-[#7256FF]
                    "
                >
                    <Github/>
                </a>
                <a
                    href="https://drive.google.com/uc?export=download&id=1TA7_0ys48XRgoCQjHzD53QIKZNDHHs58"
                    className="
                        text-lg
                        font-bold
                        duration-200

                        hover:text-[#344399]
                        dark:hover:text-[#7256FF]
                    "
                >
                    CV
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/sagg1608"
                    className="
                        duration-200

                        hover:text-[#344399]
                        dark:hover:text-[#7256FF]
                    "
                >
                    <Linkedin/>
                </a>
            </div>
        </div>
    )
}