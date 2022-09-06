import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome Service</title>
        <meta name="description" content="An Awesome Service" />
      </Head>
      <div className="blackbg">
        <div className={styles.container}>
          <div className={styles.overlay}>
            <Navbar />
            <div className={styles.subcontainer}>
              <p className={styles.gobig}>Go Big <br /> Or Go Home</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
