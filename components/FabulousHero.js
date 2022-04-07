import allData from '../data/data';


export default function FabulousHero() {

    return (
        <section className="bg-white dark:bg-dark">
            <div className="flex flex-col-reverse items-center w-full overflow-hidden py-10 tablet:flex-col-reverse md:flex-row lg:flex-row md:justify-evenly lg:justify-evenly tablet:py-10 md:py-20 lg:py-20">
            {/* Title */}
                <div className="w-50 bg-white dark:bg-dark flex flex-col gap-y-3 md:gap-y-5 md:ml-10 lg:ml-0">
                    <h1 className="text-5xl tablet:text-5xl md:text-5xl lg:text-7xl font-bold text-lightThemeText dark:text-darkThemeText">Je suis un Dev...</h1>
                    <h2 className="text-3xl tablet:text-3xl md:text-3xl lg:text-5xl underlined underlined-red underlined-bold hover:underlined-hover font-bold text-lightThemeText dark:text-darkThemeText">▸ Frontend React</h2>
                    <h2 className="text-3xl tablet:text-3xl md:text-3xl lg:text-5xl underlined underlined-yellow underlined-bold hover:underlined-hover font-bold text-lightThemeText dark:text-darkThemeText">▸ Artiste numérique</h2>
                    <h2 className="text-3xl tablet:text-3xl md:text-3xl lg:text-5xl underlined underlined-green underlined-bold hover:underlined-hover font-bold text-lightThemeText dark:text-darkThemeText">▸ Super curieux</h2>
                    <h2 className="flex gap-x-3 text-3xl tablet:text-3xl md:text-3xl lg:text-5xl md:underlined underlined-blue underlined-bold hover:underlined-hover font-bold text-lightThemeText dark:text-darkThemeText">▸ Qui <p className="hover:animate-heartBeat">❤️</p> Apprendre</h2>
                </div>
        
                <div className="w-50 relative">
                    <img src="/img/photo.png" className="w-3/4 h-3/4 block mx-auto p-2 mb-10 tablet:mb-0 md:mb-0 lg:mb-0 bg-light dark:bg-light rounded-full" alt="Photo" />
                    <span className="absolute bottom-0 right-0 text-sm smMobile:hidden sm:hidden md:block md:right-5 lg:block">↖ Oui c'est moi ! :D</span>
                </div>
            </div>

            {/* Soft skills */}
            <div className="flex flex-wrap w-full overflow-hidden justify-center pt-5 tablet:w-50 md:w-50 lg:w-50 tablet:pt-10 md:pt-10 lg:pt-10 tablet:pb-15 md:pb-15 lg:pb-15">
                {allData.about.softSkills.map((sftSkill) => {
                                return(
                                    <p key={sftSkill.name} className="softSkillSpan hover:softSkillSpanHover md:text-2xl text-lightThemeText dark:text-white font-bold rounded-lg py-3 px-5 m-2" style={{backgroundColor: sftSkill.color}}>{sftSkill.name}</p>
                                )
                            })}
            </div>
        </section>
    )
}