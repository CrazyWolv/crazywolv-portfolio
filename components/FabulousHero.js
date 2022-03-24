export default function FabulousHero() {
    return (
        <section className="bg-white dark:bg-dark">
            <div className="flex flex-row justify-around w-full overflow-hidden py-20">
            {/* Title */}
                <div className="w-50 bg-white dark:bg-dark flex flex-col gap-y-5 md:gap-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold text-lightThemeText dark:text-darkThemeText">Frontend React</h1>
                    <h1 className="text-5xl md:text-7xl font-bold text-lightThemeText dark:text-darkThemeText">Artiste numérique</h1>
                    <h1 className="text-5xl md:text-7xl font-bold text-lightThemeText dark:text-darkThemeText">Super curieux</h1>
                    <h1 className="text-5xl md:text-7xl font-bold text-lightThemeText dark:text-darkThemeText">Apprendre = "kiff"</h1>
                </div>

                <div className="w-50">
                    <img src="/avatars.svg" className="block p-10 bg-dark dark:bg-light rounded-lg" alt="Random avatar (for now)" />
                </div>
            </div>
        </section>
    )
}