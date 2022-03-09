export default function Card({imgUrl, title, link, techs, number}) {

    // Function to flip a project card
    function toggleFlip(evt){
        evt.classList.toggle('flip-card');
    }

    return (
        <>
            {/* 1 Card */}
            
            <div className="bg-transparent relative cursor-pointer rounded-md group perspective-1000">
                    <div className="card preserve-3D relative overflow-hidden rounded-md w-full h-full duration-1000" onClick={(evt) => {toggleFlip(evt.currentTarget)}}>
                        
                        {/* Back of the Card */}
                    <div className="back absolute w-full h-full backface-hidden bg-secondary flex flex-col justify-start">
                            {/* Title Div */}
                        <div className="absolute w-full flex justify-center text-center">
                                    <p className="w-1/2 uppercase mt-10 font-bold text-2xl rounded-md px-5 py-1">
                                        {title}
                                    </p>
                                </div>

                                {/* Project Description */}
                                <div className="w-full pl-10">
                                    blah blah blah
                                </div>

                                {/* Techs Used */}
                                <div className="flex w-full px-2 justify-center items-center">
                                    {
                                        techs.map((tech) => {
                                        return(
                                            <p key={tech} className="p-1 m-1 rounded-sm">  
                                                {tech}
                                            </p>
                                        )
                                    })}
                                </div>

                                {/* "Go GitHub" button */}
                                <div className="flex items-center justify-center w-full">
                                    <button className="absolute py-3 px-5 bottom-5 rounded-md bg-light">
                                        Check le GitHub
                                    </button>
                                </div>
                        </div>

                        {/* Front of the Card */}
                    <div className="front w-full h-full rounded-md backface-hidden z-10">
                            <div className="absolute w-full flex justify-center text-center">
                                    <p className="w-1/2 uppercase mt-10 font-bold text-2xl rounded-md px-5 py-1 bg-secondary">{title}</p>
                                </div>
                            <p className="bottom-5 left-5 md:bottom-10 md:left-10 font-bold text-xl bg-secondary rounded-full w-[40px] h-[40px] flex items-center justify-center absolute">{number}</p>
                            <img src={imgUrl} alt={`Image de présentation pour ${title}`} className="w-full h-full rounded-md" />
                        </div>
                    </div>
                </div>
        </>
    )
};