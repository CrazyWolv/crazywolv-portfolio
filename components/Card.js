import {useState} from "react";

export default function Card({imgUrl, title, link, techs, number}) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <>
            {/* 1 Card */}
            <div className="bg-transparent rounded-lg w-[375px] h-[250px] md:w-[560px] md:h-[330px] cursor-pointer mx-auto"> {/* <-- Flipbox */}
                    <div className={`card preserve-3D relative overflow-hidden rounded-md w-full h-full duration-1000 ${isFlipped ? "flip-card" : ""}`}> {/* <-- Flipbox-inner */}

                           {/* Front of the Card */}
                    <div className="front rounded-md bg-dark" onClick={() => (setIsFlipped(!isFlipped))}> {/* <-- Flipbox-inner #Front */}
                            <div className="absolute w-full flex justify-center text-center">
                                    <p className="w-1/2 uppercase mt-5 font-bold text-xl rounded-md px-5 py-1 bg-secondary z-10">{title}</p>
                                </div>
                            <p className="absolute bottom-5 left-5 md:bottom-10 md:left-10 font-bold text-xl bg-secondary rounded-full w-[40px] h-[40px] flex items-center justify-center z-10">{number}</p>
                            <img src={imgUrl} alt={`Image de présentation pour ${title}`} className="w-full h-full rounded-md" />
                        </div>
                        
                        
                        {/* Back of the Card */}
                    <div className="back rounded-md flex flex-col justify-start" onClick={() => (setIsFlipped(!isFlipped))}> {/* <-- Flipbox-inner #Back */}
                            {/* Title Div */}
                        <div className="absolute w-full flex justify-center text-center">
                                    <p className="w-full uppercase md:mt-5 font-bold text-xl rounded-md px-5 py-1">
                                        {title}
                                    </p>
                                </div>

                                {/* Project Description */}
                                <div className="absolute w-full pl-10 pt-10 md:pt-20">
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
                                    {link === "WIP" ? <button href="#" className="absolute py-2 px-3 md:py-3 md:px-5 bottom-3 md:bottom-5 rounded-md bg-orange font-bold">
                                        Work in Progress
                                    </button> : <button href={link} target="_blank" rel="noreferrer" className="absolute py-2 px-3 md:py-3 md:px-5 bottom-3 md:bottom-5 rounded-md bg-secondary font-bold">
                                        Check le GitHub
                                    </button>
                                    }
                                </div>
                        </div>

                     
                    </div>
                </div>
        </>
    )
};