export default function FabulousHero() {
    return (
        <section className="bg-white dark:bg-dark">
            <div className="flex flex-row justify-evenly w-full overflow-hidden py-20">
            {/* Title */}
                <div className="w-50 bg-white dark:bg-dark flex flex-col gap-y-3 md:gap-y-5">
                    <h1 className="text-5xl md:text-7xl font-bold text-lightThemeText dark:text-darkThemeText">Je suis un Dev...</h1>
                    <h2 className="text-3xl md:text-5xl md:underlined underlined-red underlined-bold hover:underlined-hover font-bold text-lightThemeText dark:text-darkThemeText">▸ Frontend React</h2>
                    <h2 className="text-3xl md:text-5xl md:underlined underlined-yellow underlined-bold hover:underlined-hover font-bold text-lightThemeText dark:text-darkThemeText">▸ Artiste numérique</h2>
                    <h2 className="text-3xl md:text-5xl md:underlined underlined-green underlined-bold hover:underlined-hover font-bold text-lightThemeText dark:text-darkThemeText">▸ Super curieux</h2>
                    <h2 className="text-3xl md:text-5xl md:underlined underlined-blue underlined-bold hover:underlined-hover font-bold text-lightThemeText dark:text-darkThemeText">▸ Qui ❤️ Apprendre</h2>
                </div>

                <div className="w-50">
                    <img src="/avatars.svg" className="block p-10 bg-dark dark:bg-light rounded-lg" alt="Random avatar (for now)" />
                </div>
            </div>
        </section>
    )
}