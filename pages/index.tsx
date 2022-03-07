import Head from "next/head";
import Layout from '@components/Layout'
import FabulousHero from '@components/FabulousHero'
import FavProjects from '@components/MyFavProjects'
import allData from '@data/data'

export default function Home() {
  return (
    <>
      <Layout 
        title="POULHES Enzo - Portfolio"
        description="Voilà 2 ans que ma quête chez O'Clock s'est terminée. Venez découvrir mes projets !"
      >
        <FabulousHero />
        {/* <FavProjects /> */}
        </Layout>
    </>
  )
}
