import allData from '@data/data';

export default function Exp() {
    let xpKey=0;

    return (
        <section className="bg-white dark:bg-dark">
        {/* Title */}
            <div className="bg-white dark:bg-dark max-w-6xl mx-auto h-48">
                <h1 className="text-7xl md:text-9xl font-bold py-20 text-center md:text-center text-lightThemeText dark:text-darkThemeText">Mon Parcours</h1>
            </div>

            <div className="bg-white dark:bg-dark max-w-6xl text-xl mx-auto flex-col text-lightThemeText dark:text-darkThemeText">
                <div className="py-10 flex flex-col gap-y-3 md:gap-y-5 items-center w-full">
                    {allData.exp.map((xp) => {
                        return(
                        <div key={xp.title} className="my-5 md:w-1/2">
                            <div className="flex flex-col items-center py-2 md:py-3">
                                <p className="text-2xl font-bold md:text-4xl">{xp.title}</p>
                                <div className="flex flex-row items-center gap-x-10 my-2">
                                    {xp.companyLink === "" ? <p>{xp.company}</p> : 
                                    <a href={xp.companyLink} className="italic text-secondary">{xp.company}</a>} {xp.year}
                                </div>
                            </div>
                            <p className="text-center"></p>
                            <p className="text-left">{xp.desc}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}