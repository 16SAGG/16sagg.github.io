export const Star = ({fill = "currentColor", stroke = "currentColor"})=>{
    return(
        <svg className="w-full text-inherit" viewBox="0 0 282 269" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={fill} stroke={stroke} strokeWidth="2" d="M126.734 10.9058C131.224 -2.91388 150.776 -2.91391 155.266 10.9058L178.045 81.0122C180.053 87.1925 185.812 91.3769 192.311 91.3769H266.025C280.556 91.3769 286.597 109.971 274.842 118.512L215.206 161.84C209.948 165.66 207.748 172.431 209.757 178.611L232.535 248.717C237.026 262.537 221.209 274.029 209.453 265.488L149.817 222.16C144.559 218.34 137.441 218.34 132.183 222.16L72.5471 265.488C60.7914 274.029 44.9742 262.537 49.4645 248.717L72.2435 178.611C74.2516 172.431 72.0517 165.66 66.7944 161.84L7.15831 118.512C-4.59739 109.971 1.44422 91.3769 15.9751 91.3769H89.6893C96.1877 91.3769 101.947 87.1925 103.955 81.0122L126.734 10.9058Z"/>
        </svg>
    )
}

export const DoubleStar = ({scale = 1, fill="currentColor", stroke="currentColor"})=>{
    return(
        <div
            style={{transform: `scale(${scale})`}}

            className="
            grid
            grid-rows-1
            grid-cols-1
            "
        >
            <div
                className="
                col-start-1
                col-end-1
                row-start-1
                row-end-1
                h-28
                w-28
                z-10
                text-[#7256FF]

                md:h-36
                md:w-36
                "
            >
                <Star fill={fill} stroke={stroke}/>
            </div>
            <div
                className="
                col-start-1
                col-end-1
                row-start-1
                row-end-1
                h-28
                w-28
                relative
                top-2
                left-4
                text-[#344399]

                md:h-36
                md:w-36
                "
            >
                <Star fill={fill} stroke={stroke}/>
            </div>
        </div>
    )
}