import allData from '@data/data';

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
                            <p className="min-w-[7rem] max-w-[9rem] ml-7 my-10 py-3 text-2xl bg-[#f44a3a] rounded-md text-center text-white font-bold">Fun Facts</p>
                            <div className="w-3/6 md:w-full lg:w-full mx-auto flex flex-col items-center gap-y-7">
                            {allData.about.funFacts.map((fact) => {
                                factKey++;
                                return(
                                    <p key={`fact-n${factKey}`} className="px-3 text-base text-lightThemeText dark:text-white"><span className="text-[#f44a3a] text-2xl">▸</span> {fact}</p>
                                )
                            })}
                            </div>
                            <p className="min-w-[7rem] max-w-[9rem] ml-7 my-10 py-3 text-2xl bg-[#f44a3a] rounded-md text-center text-white font-bold">Hard Skills</p>
                            <div className="flex flex-wrap w-[95%] mx-auto gap-x-10 gap-y-5 md:gap-5">
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
                                <p className="underline decoration-dotted decoration-black ml-15 text-lightThemeText dark:text-white"><a className="linkSocial hover:linkSocialHover" href={allData.socialLinks.twitter}><span className="text-black">→</span> Twitter</a></p>
                                <p className="underline decoration-dotted decoration-black ml-15 text-lightThemeText dark:text-white"><a className="linkSocial hover:linkSocialHover" href={allData.socialLinks.linkedin}><span className="text-black">→</span> LinkedIn</a></p>
                                <p className="underline decoration-dotted decoration-black ml-15 text-lightThemeText dark:text-white"><a className="linkSocial hover:linkSocialHover" href={allData.socialLinks.github}><span className="text-black">→</span> GitHub</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}