import Layout from '@components/Layout.js'
import FabulousHero from '@components/FabulousHero.js'


export default function Home() {
  return (
    <>
      <Layout 
        title="POULHES Enzo - Portfolio"
        description="Voilà 2 ans que ma quête chez O'Clock s'est terminée. Venez découvrir mes projets !"
      >
        <FabulousHero />
        </Layout>
    </>
  )
}