import allData from '@data/data';

export default function About() {
    const factKey=0;

    return (
        <section className="bg-white dark:bg-dark">
            {/* Title */}
            <div className="bg-white dark:bg-dark max-w-6xl mx-auto h-48">
                <h1 className="text-7xl md:text-9xl font-bold py-20 text-center md:text-left">A propos</h1>
            </div>

            <div className="bg-white dark:bg-dark max-w-6xl mx-auto flex-col">
                <div className="py-10 pl-10 bg-light">
                    <p className="">Je code actuellement le projet <a href={allData.about.currentProjectUrl} target="_blank" rel="noreferrer">{allData.about.currentProject}</a></p>
                </div>
                <div className="mx-auto relative md:flex md:flex-row-reverse gap-20">
                <div className="w-full pr-10">
                    {allData.about.description.map((fact) => {
                        factKey++;

                        return(
                            <p key={`fact-n${factKey}`} className="my-5">{fact}</p>
                        )
                    })}
                </div>
                    <div className="bg-light p-5 md:w-1/2 bottom-0 flex flex-col item-center">
                    <p className="my-5">Contact -> {allData.mail}</p>
                    <p className="my-5">Twitter -></p>
                    <p className="my-5">LinkedIn -></p>
                    <p className="my-5">GitHub -></p>
                    </div>
            </div>
            </div>
        </section>
    )
}