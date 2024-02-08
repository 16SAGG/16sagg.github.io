export const Slider = ({slides = []}) =>{
    return(
        <div 
            className="
            overflow-hidden
            h-full
            "
        >
            <div 
                className="
                slide-track
                grid
                grid-rows-3
                grid-cols-2
                "
            >   
                {
                    slides.map((slide, _index) =>
                        <div key={_index}
                            className="
                            "
                        >
                            {slide}
                        </div>
                    )
                }
            </div>
        </div>
    )
}