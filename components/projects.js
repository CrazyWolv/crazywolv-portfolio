import Card from './Card';
import allData from '@data/data';

export default function Projects() {
    let projectCount = 0;

    return (
        <section className="py-10 bg-white dark:bg-dark">
            {/* Title */}
            <div className="bg-white dark:bg-dark max-w-6xl mx-auto h-48">
                <h1 className="text-7xl md:text-9xl font-bold py-10 text-center md:text-center text-lightThemeText dark:text-darkThemeText md:underlined underlined-blue hover:underlined-hover">Projets</h1>
            </div>

            {/* Grid */}
            <div className="bg-white dark:bg-dark">
                <div className="bg-white dark:bg-dark max-w-6xl mx-auto grid grid-cols-1 tablet:grid-cols-2 md:grid-cols-2 gap-8 py-20 pb-40">

                {allData.projects.map((project) => {
                    projectCount++;
                    if(projectCount < 10){
                        projectCount = `0${projectCount}`
                    }

                    return(
                            <Card {...project} key={projectCount} number={projectCount} />
                    )
                })}
                
                </div>
            </div>
        </section>
    )
}