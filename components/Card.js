import {useState} from "react";

export default function Card({imgUrl, title, link, techs, number}) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <>
            {/* 1 Card */}
            <div className="card-container bg-transparent rounded-lg w-[375px] h-[250px] md:w-[560px] md:h-[330px] mx-auto perspective-1000"> {/* <-- Flipbox */}
                    <div className={`preserve-3D card relative overflow-hidden rounded-md w-full h-full duration-1000 ${isFlipped ? "flip-card" : ""}`}> {/* <-- Flipbox-inner */}

                    {/* <p className={`absolute preserve-3D h-full w-full bg-light p-5 backface-hidden ${isFlipped ? "z-0" : "z-10 "}`}>Im Front</p>
                    <p className={`absolute preserve-3D p-5 h-full w-full backface-hidden rounded-md flex flex-col justify-start ${isFlipped ? "y-rotate-180 back z-10" : "y-rotate-180 z-0" }`}>I'm in the Back</p> */}

                           {/* Front of the Card */}
                   <div className={`front preserve-3D h-full w-full rounded-md bg-light ${isFlipped ? "rotate-y-180 z-0" : "rotate-y-default z-10" }`}> {/* <-- Flipbox-inner #Front */}
                   {/* Flip the card "Button" */}
                        <div className="flip-arrow absolute font-bold text-2xl text-dark cursor-pointer bottom-2 right-2 w-[40px] h-[40px] flex items-center justify-center z-10" onClick={() => (setIsFlipped(!isFlipped))}>↺</div>
                            <div className="absolute w-full flex justify-center text-center">
                                     <p className="w-1/2 uppercase mt-5 font-bold text-xl rounded-md px-5 py-1 bg-secondary z-10">{title}</p>
                                </div>
                            <p className="absolute bottom-5 left-5 md:bottom-10 md:left-10 font-bold text-xl bg-secondary rounded-full w-[40px] h-[40px] flex items-center justify-center z-10">{number}</p>
                            <img src={imgUrl} alt={`Image de présentation pour ${title}`} className="w-full h-full block rounded-md" />
                        </div>
                        
                        
                        {/* Back of the Card */}
                    <div className={`absolute bg-light preserve-3D h-full w-full rounded-md flex flex-col justify-start ${isFlipped ? "y-rotate-180 back z-10" : "y-rotate-180 z-0" }`}> {/* <-- Flipbox-inner #Back */}
                    {/* Flip the card "Button" */}
                    <div className="flip-arrow absolute font-bold text-2xl text-dark cursor-pointer bottom-2 right-2 w-[40px] h-[40px] flex items-center justify-center z-10" onClick={() => (setIsFlipped(!isFlipped))}>↺</div>
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

                                {/* "Go GitHub or Live Site" button */}
                                <div className="flex items-center justify-center w-full">
                                    {link === "WIP" ? <a href="#" className="absolute py-2 px-3 md:py-3 md:px-5 bottom-3 md:bottom-5 rounded-md bg-dark font-bold">
                                        Work in Progress
                                    </a> : <a href={link} target="_blank" className="absolute py-2 px-3 md:py-3 md:px-5 bottom-3 md:bottom-5 rounded-md bg-secondary font-bold">
                                        Découvrez-moi !
                                    </a>
                                    }
                                </div>
                        </div>

                     
                    </div>
                </div>
        </>
    )
};