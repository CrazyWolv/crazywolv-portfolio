import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';

export default function Layout({children, ...customMeta}) {
    const meta = {
        title:"Poulhes Enzo - Développeur Frontend React & Digital Artist",
        description:`Voilà 2 ans que j'ai quitté l'école O'Clock pour développer mes quelques projets en tant que Dev. Venez les découvrir !`,
        image:"",
        type:"website",
        ...customMeta
    }
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                {/* <meta property="og:url" /> */}
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Poulhes Enzo" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
            </Head>

            <main className="w-full dark:bg-dark">
                <Nav />
                    <div>
                        {children}
                    </div>
                <Footer />
            </main>
        </div>
    )
}