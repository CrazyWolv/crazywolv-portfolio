import Head from "next/head";
import Layout from '../components/Layout'
import FabulousHero from '../components/FabulousHero'
import FavProjects from '../components/MyFavProjects'
// import data from '@constants/data'

export default function Home() {
  return (
    <>
      <Layout 
        title="POULHES Enzo - Développeur Frontend React & Artiste Numérique"
        description="Voilà 2 ans que ma quête chez O'Clock s'est terminée. Venez découvrir mes projets !"
      >
        <FabulousHero />
        <FavProjects />
        </Layout>
    </>
  )
}
