export const Arrow = ()=>{
    return(
        <svg className="arrow w-full text-inherit" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
    )
}

export const CircleArrow = ({scale = 1, rotate = 180})=>{
    return(
        <div
            style={{transform: `scale(${scale}) rotate(${rotate}deg)`}}
            className="
                flex
                items-center
                justify-center
                rounded-full
                text-[#FDFDFD]
                bg-[#0F0F12]
                p-2
                h-7
                w-7

                dark:text-[#1D1C20]
                dark:bg-gray-200
            "
        >
            <Arrow/>
        </div>
    )
}