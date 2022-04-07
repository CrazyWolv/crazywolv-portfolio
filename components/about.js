import allData from '../data/data';

export default function About() {
    let factKey=0;
    let descKey=0;

    return (
        <section className="py-10 bg-white dark:bg-dark">
            {/* Title */}
            <div className="bg-white dark:bg-dark max-w-6xl mx-auto h-48">
                <h1 className="text-7xl md:text-9xl font-bold py-10 text-center md:text-center text-lightThemeText dark:text-darkThemeText md:underlined underlined-red hover:underlined-hover z-10">A Propos</h1>
            </div>

            <div className="bg-white dark:bg-dark max-w-6xl text-xl mx-auto flex-col -mt-15 tablet:-mt-0 md:-mt-0">
                <div className="py-15 px-5 tablet:px-10 md:px-10 font-bold flex items-center justify-center">
                    <div className="text-3xl tablet:text-5xl md:text-5xl text-center text-lightThemeText dark:text-darkThemeText">Je code actuellement le projet <div className="mt-7 tablet:mt-5 md:mt-5"><span className="text-base tablet:text-2xl md:text-2xl">✨</span> <a className="accentOn" href={allData.about.currentProjectUrl} target="_blank" rel="noreferrer">{allData.about.currentProject}</a> <span className="text-base tablet:text-2xl md:text-2xl">✨</span></div></div>
                </div>
                        <div className="w-3/6 md:w-full lg:w-full mx-auto flex flex-col items-center py-10 gap-y-7 bg-[#f44a3a]">
                            {allData.about.description.map((desc) => {
                                descKey++;
                                return(
                                    <p key={`fact-n${descKey}`} className="w-5/6 px-3 text-lightThemeText dark:text-white">{desc}</p>
                                )
                            })}
                        </div>
                <div className="mx-auto relative tablet:flex tablet:flex-row-reverse md:flex md:flex-row-reverse gap-x-10">
                    <div className="w-full px-2 py-2">
                        <div className="w-full py-5">
                            <p className="min-w-[7rem] max-w-[9rem] ml-7 mt-5 mb-3 py-3 text-2xl bg-[#f44a3a] rounded-md text-center text-white font-bold">Fun Facts</p>
                            <div className="w-3/6 md:w-full lg:w-full mx-auto flex flex-col gap-y-3">
                            {allData.about.funFacts.map((fact) => {
                                factKey++;
                                return(
                                    <p key={`fact-n${factKey}`} className="px-3 text-base text-lightThemeText dark:text-white"><span className="text-[#f44a3a] text-2xl">▸</span> {fact}</p>
                                )
                            })}
                            </div>
                            <p className="min-w-[7rem] max-w-[9rem] ml-7 mt-10 py-3 text-2xl bg-[#f44a3a] rounded-md text-center text-white font-bold">Hard Skills</p>
                            <div className="flex flex-wrap w-[95%] mx-auto py-10 gap-x-10 gap-y-5 md:gap-5">
                            {allData.about.hardSkills.map((skill) => {
                                return(
                                    <img key={skill.name} src={skill.icon} alt={`Logo ${skill.name}`} className="h-15 w-15 tablet:h-20 tablet:w-20 md:h-20 md:w-20 hover:animate-wiggle" />
                                )
                            })}
                            </div>
                        </div>
                        {/* <div className="w-full py-5">
                            <p className="min-w-[7rem] max-w-[9rem] ml-7 my-10 py-3 text-2xl bg-[#f44a3a] rounded-md text-center text-white">Je veille...</p>

                            <div className="flex flex-wrap w-[95%] mx-auto gap-x-10 gap-y-5 md:gap-5">
                                <img src="https://cdn.worldvectorlogo.com/logos/docker.svg" className="h-15 w-15 tablet:h-20 tablet:w-20 md:h-20 md:w-20" alt="Logo Docker" /><img src="https://cdn.worldvectorlogo.com/logos/vue-js-1.svg" className="h-15 w-15 tablet:h-20 tablet:w-20 md:h-20 md:w-20" alt="Logo VueJS" /><img src="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" className="h-15 w-15 tablet:h-20 tablet:w-20 md:h-20 md:w-20" alt="Logo Angular" /><img src="https://cdn.worldvectorlogo.com/logos/php-1.svg" className="h-15 w-15 tablet:h-20 tablet:w-20 md:h-20 md:w-20" alt="PHP Logo" />
                            </div>
                        </div> */}
                    </div>

                    <div className="bg-light px-5 py-7 tablet:w-3/4 md:w-3/4 bottom-0 flex flex-col item-center">
                        <div className="flex flex-col mb-5">
                            <p className="ml-5 my-5 text-3xl w-4/6 aboutTitle hover:aboutTitleHover">▸ Contact</p>
                            <p className="w-4/5 mx-auto text-lightThemeText dark:text-white">Si mon profil vous intéresse, vous pouvez toujours me <a className="aboutLink hover:aboutLinkHover" href={`mailto:${allData.mail}`}>contacter</a> (je réponds au plus vite, promis !)</p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <p className="ml-5 my-5 text-3xl w-4/6 aboutTitle hover:aboutTitleHover">▸ Jobs</p>
                            <p className="w-4/5 mx-auto text-lightThemeText dark:text-white">Je suis actuellement à la recherche d'une Alternance (contrat d'apprentissage) ! Vous pouvez consulter mon <a className="aboutLink hover:aboutLinkHover" href={allData.resumeUrl.alt} target="_blank" rel="noreferer">CV</a> ainsi que le <a className="aboutLink hover:aboutLinkHover" href={allData.resumeUrl.planning} target="_blank" rel="noreferer">planning</a>.</p>
                        </div>
                        <div className="my-3">
                            <p className="ml-5 my-5 text-3xl w-4/6 aboutTitle hover:aboutTitleHover">▸ Mes Réseaux</p>
                            <div className="flex flex-col gap-y-5">
                            <div className="flex items-center ml-15 gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    fill="#f44a3a"
                                    className="bi bi-twitter h-5 w-5" 
                                    viewBox="0 0 512 512" 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}>
                                    {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                                    <p className="text-lightThemeText dark:text-white"><a className="linkSocial hover:linkSocialHover" href={allData.socialLinks.twitter}>➜ Twitter</a></p>
                                </div>
                                
                                <div className="flex items-center ml-15 gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    fill="#f44a3a"
                                    className="bi bi-linkedin h-5 w-5" 
                                    viewBox="0 0 512 512" 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}>
                                    {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                    <p className="text-lightThemeText dark:text-white"><a className="linkSocial hover:linkSocialHover" href={allData.socialLinks.linkedin}>➜ LinkedIn</a></p>
                                    </div>
                                    <div className="flex items-center ml-15 gap-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                        fill="#f44a3a"
                                        className="bi bi-github h-5 w-5" 
                                        viewBox="0 0 512 512" 
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}>
                                        {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                        <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
                                        <p className="text-lightThemeText dark:text-white"><a className="linkSocial hover:linkSocialHover" href={allData.socialLinks.github}>➜ GitHub</a></p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}