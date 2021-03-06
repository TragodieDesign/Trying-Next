import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>New project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        
  
        <h1 className={styles.title}>
          A new React app with Nextjs
        </h1>

        <p className={styles.description}>
          Trying to create a blog with react
        </p>
        <div className={styles.images}>
      <Image src= '/home/hamlet/project/next-try/public/bb.jpg' width={600} height={400}/>


        </div>

        <div className={styles.grid}>
        <Link href="/About">
    <a ><h2>Access the blog  by clicking</h2>
            <h3 className={styles.button}>Here</h3>
          </a>
          </Link>

        </div>
      </main>

    <Footer/>
    </div>
  )
}
