import {useState} from "react";

export default function Card({imgUrl, title, link, gitHub, desc, techs, number}) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <>
            {/* 1 Card */}
            <div className="card-container bg-transparent rounded-lg w-[375px] h-[250px] md:w-[560px] md:h-[330px] mx-auto perspective-1000"> {/* <-- Flipbox */}
                    <div className={`preserve-3D card relative overflow-hidden rounded-md w-full h-full duration-1000 ${isFlipped ? "flip-card" : ""}`}> {/* <-- Flipbox-inner */}

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
                                    {desc}

                                {/* Techs Used */}
                                    <div className="relative w-3/4 md:w-full">
                                        <div className="flex justify-center items-center absolute gap-x-2 px-2 py-2">
                                        {
                                            techs.map((tech) => {
                                            return(
                                                <img src={tech.icon} key={tech.title} alt={`Logo ${tech.title}`} className="h-8 w-8" />
                                            )
                                        })}
                                        </div>
                                    </div>
                                </div>

                                {/* "Go GitHub or Live Site" button */}
                                <div className="flex items-center justify-center w-full">
                                    {link === "WIP" || link === "" ? <p className="absolute py-2 px-3 md:py-3 md:px-5 bottom-3 md:bottom-5 rounded-md bg-dark font-bold">
                                        Work in Progress
                                    </p> : <a href={link} target="_blank" className="absolute py-2 px-3 md:py-3 md:px-5 bottom-3 md:bottom-5 rounded-md bg-secondary font-bold">
                                        Découvrez-moi !
                                    </a>
                                    } <a href={gitHub} className="absolute bottom-3 left-5 md:bottom-5 md:left-5 font-bold flex items-center gap-x-1 md:gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        fill="currentColor"
                                        className="bi bi-github h-5 w-5 md:h-10 md:w-10" 
                                        viewBox="0 0 512 512" 
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}>
                                        {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                        <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg> GitHub
                                    </a>
                                </div>
                        </div>

                     
                    </div>
                </div>
        </>
    )
};