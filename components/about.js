import allData from '@data/data';

export default function About() {
    const factKey=0;

    return (
        <section className="bg-white dark:bg-dark">
            {/* Title */}
            <div className="bg-white dark:bg-dark max-w-6xl mx-auto h-48">
                <h1 className="title text-5xl md:text-9xl font-bold py-20 text-center md:text-left">A propos</h1>
            </div>

            <div className="bg-white dark:bg-dark max-w-6xl mx-auto flex-col">
                <div className="title py-10 pl-10 bg-light">
                    Je code actuellement le projet <a href={allData.about.currentProjectUrl} target="_blank" rel="noreferrer">{allData.about.currentProject}</a>
                </div>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40 bg-secondary">
                    <div className="bg-light">
                    You can contact me here : {allData.mail}
                    </div>
                <div className="">
                    {allData.about.description.map((fact) => {
                        factKey++;

                        return(
                            <p key={`fact-n${factKey}`} className="my-5">{fact}</p>
                        )
                    })}
                </div>
            </div>
            </div>
        </section>
    )
}