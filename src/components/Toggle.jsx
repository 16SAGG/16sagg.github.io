export const Toggle = ({
    leftState = <span></span>,
    peerBackground = "gray",
    rightState = <span></span>,
    value = false, 
    onChange = ()=>{}
})=>{
    return(
        <label className="relative inline-flex gap-2 items-center cursor-pointer">
            {leftState}
            <input
                type="checkbox" 
                checked={value}
                onChange={() => onChange(!value)}
                className="sr-only peer"/>
            <div
                style={{backgroundColor:peerBackground}}
                className="
                w-11
                h-6
                rounded-full 
                peer 
                peer-checked:after:translate-x-full
                transition-all
                rtl:peer-checked:after:-translate-x-full
                after:content-[''] 
                after:absolute 
                after:top-[4px] 
                after:start-[38px] 
                after:bg-white
                after:shadow
                after:shadow-gray-800
                after:rounded-full 
                after:w-5
                after:h-5 
                after:transition-all

                md:w-20
                md:h-7
                md:after:w-6
                md:after:h-6
                md:after:top-[2px] 
                md:after:start-[40px]
                md:peer-checked:after:translate-x-12
                md:rtl:peer-checked:after:-translate-x-12
                "
            >
            </div>
            {rightState}
	    </label>
    )
}