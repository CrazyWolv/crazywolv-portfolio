import allData from '@data/data';

export default function About() {
    let factKey=0;

    return (
        <section className="bg-white dark:bg-dark">
            {/* Title */}
            <div className="bg-white dark:bg-dark max-w-6xl mx-auto h-48">
                <h1 className="text-7xl md:text-9xl font-bold py-20 text-center md:text-center text-lightThemeText dark:text-darkThemeText">A Propos</h1>
            </div>

            <div className="bg-white dark:bg-dark max-w-6xl text-xl pb-20 mx-auto flex-col -mt-15 md:-mt-0">
                <div className="py-10 pl-10 bg-light">
                    <p className="text-5xl text-lightThemeText dark:text-darkThemeText">Je suis {allData.about.title} qui code actuellement le projet<br/><a className="accentOn" href={allData.about.currentProjectUrl} target="_blank" rel="noreferrer">{allData.about.currentProject}</a></p>
                </div>
                <div className="mx-auto relative md:flex md:flex-row-reverse gap-x-15">
                    <div className="w-full px-2 py-2">
                        <div className="w-[90%] mx-auto flex flex-col gap-y-5 mt-5 md:w-full">
                            {allData.about.description.map((fact) => {
                                factKey++;
                                return(
                                    <p key={`fact-n${factKey}`} className="text-lightThemeText dark:text-darkThemeText">{fact}</p>
                                )
                            })}
                        </div>
                        <div className="w-full py-5">
                            <p className="min-w-[7rem] max-w-[9rem] ml-7 my-10 py-3 text-2xl bg-light rounded-md text-center text-lightThemeText dark:text-darkThemeText">Hard Skills</p>

                            <div className="flex flex-wrap w-[95%] mx-auto gap-x-10 gap-y-5 md:gap-5">
                            {allData.about.hardSkills.map((skill) => {
                                return(
                                    <img key={skill.name} src={skill.icon} alt={`Logo ${skill.name}`} className="h-20 w-20" />
                                )
                            })}
                            </div>
                        </div>
                    </div>

                    <div className="bg-light px-5 py-7 md:py-0 md:px-0 md:w-1/2 bottom-0 flex flex-col item-center">
                        <div className="flex flex-col mb-5">
                            <p className="ml-5 my-5 text-2xl">Contact →</p>
                            <p className="text-lightThemeText dark:text-darkThemeText">Si mon profil vous intéresse, vous pouvez toujours me <a href={`mailto:${allData.mail}`}>contacter</a> (je réponds au plus vite, promis !)</p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <p className="ml-5 my-5 text-2xl">Jobs →</p>
                            <p className="text-lightThemeText dark:text-darkThemeText">Je suis actuellement à la recherche d'une Alternance (contrat d'apprentissage) ! Vous pouvez consulter mon <a href={allData.resumeUrl.alt}>CV</a> ainsi que le <a href={allData.resumeUrl.planning}>planning</a>.</p>
                        </div>
                        <div className="my-3">
                            <p className="ml-5 my-5 text-2xl">Mes Réseaux →</p>
                            <div className="flex flex-col gap-y-5">
                                <p className="ml-15 text-lightThemeText dark:text-darkThemeText">→ <a href={allData.socialLinks.twitter}>Twitter</a></p>
                                <p className="ml-15 text-lightThemeText dark:text-darkThemeText">→ <a href={allData.socialLinks.linkedin}>LinkedIn</a></p>
                                <p className="ml-15 text-lightThemeText dark:text-darkThemeText">→ <a href={allData.socialLinks.github}>GitHub</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}