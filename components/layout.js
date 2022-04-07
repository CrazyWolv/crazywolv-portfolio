import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({children, ...customMeta}) {
    const meta = {
        title:"Poulhes Enzo - Développeur Frontend React & Digital Artist",
        description:`Voilà 2 ans que j'ai quitté l'école O'Clock pour développer mes quelques projets en tant que Dev. Venez les découvrir !`,
        type:"website",
        ...customMeta
    }
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Poulhes Enzo Portfolio" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
            </Head>

            <main className="main w-full h-screen dark:bg-dark">
                <Nav />
                    <div>
                        {children}
                    </div>
                <Footer />
            </main>
        </div>
    )
}