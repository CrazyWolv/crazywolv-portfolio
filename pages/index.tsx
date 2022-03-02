import Head from "next/head";
import Layout from '../components/layout'
import DragonBoy from '../components/dragonBoy'
import FavProjects from '../components/myFavoriteProjects'
// import userData from '@constants/data'

export default function Home() {
  return (
    <>
      <Layout 
        title="POULHES Enzo - Frontend Developer & Digital Artist"
        description="It's been 2 years since I quitted O'Clock school to develop my own apps. Come with me to discover them."
      >
        <DragonBoy />
        <FavProjects />
        </Layout>
    </>
  )
}
