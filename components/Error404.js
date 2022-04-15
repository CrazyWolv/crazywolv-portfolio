import Head from 'next/head';
import Footer from "./footer";
import Link from 'next/link';

export default function Error404() {
    const meta = {
        title:"Page not found",
        description:`Error 404 page not found`,
        type:"website"
    }

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:site_name" content="Poulhes Enzo Portfolio" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
            </Head>
            <section className="bg-white dark:bg-dark">
                <div className="flex flex-col-reverse items-center w-full mx-auto overflow-hidden py-10 lg:flex-row lg:justify-around">
                    <div className="w-full lg:w-1/2 bg-white dark:bg-dark flex flex-col items-center gap-y-3 px-6">
                        <h1 className="text-4xl lg:text-6xl font-bold text-lightThemeText dark:text-darkThemeText text-center underlined underlined-green underlined-bold hover:underlined-hover">Une 404 sauvage apparaît !</h1>
                        <p className="w-full md:w-3/4 px-3 py-2 text-xl leading-loose">Il semblerait que vous ayez perdu votre chemin ! Lorsque vous aurez fini d'observer cet adorable boule de poils, vous pourrez cliquer <Link href="/"><a className="errorLink hover:errorLinkHover">ici</a></Link> ou même encore <Link href="/"><a className="errorLink hover:errorLinkHover">là</a></Link> pour <span className="font-bold">revenir à l'accueil</span>.</p>
                    </div>
                    <div className="w-full lg:w-1/2 lg:mr-5">
                        <img src="/img/error404.png" className="block" alt="Error 404 page not found" />
                    </div>
                </div>
                <div className="w-full py-5 text-sm text-center">
                    <a className="text-sm" target="_blank" rel="noreferrer" href="https://fr.freepik.com/vecteurs/animal">Animal vecteur créé par storyset - fr.freepik.com</a>
                </div>
            </section>

            <Footer />
        </>
    )
}