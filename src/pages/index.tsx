import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Landing from "../components/Landing/Index"
import AmazingNft from "../components/AmazingNft/Index"
import TopCollection from "../components/TopCollection/Index"
import CollectionFeature from "../components/CollectionFeature/Index"
import SellNFT from "../components/SellNFT/Index"

export default function Home() {
  return (
    <>
      <Head>
        <title>Bondstein test project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <Landing/>
          <AmazingNft/>
          <TopCollection/>
          <CollectionFeature/>
          <SellNFT/>
      </main>
    </>
  )
}
