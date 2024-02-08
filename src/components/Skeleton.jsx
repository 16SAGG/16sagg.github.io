export const Skeleton = ({isLoading = true}) =>{
    return(
        <div
            className="
            absolute
            h-full
            w-full
            top-0
            left-0
            animate-pulse
            bg-[#0F0F12]
            rounded-xl
            "
            style={{
                display : (isLoading) ? "block" : "none"
            }}
        ></div>
    )
} 