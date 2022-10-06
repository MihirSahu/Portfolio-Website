import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TypeAnimation } from 'react-type-animation';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mihir Sahu</title>
        <link rel="icon" href="/m.png" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>I'm 
          <TypeAnimation
            sequence={[
              "Mihir.",
              2000,
              "a student.",
              2000,
              "a developer.",
              2000,
              "a learner.",
              2000,
              () => {console.log("Done typing");}
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
          />
        </h1>
        <h3>Scroll down to learn more.</h3>
      </header>

      <main className={styles.main}>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <a href="https://www.linkedin.com/in/the-mihir-sahu" target="blank"><ion-icon size="large" name="logo-linkedin"></ion-icon></a>
          <a><ion-icon size="large" name="logo-github"></ion-icon></a>
          <a><ion-icon size="large" name="logo-discord"></ion-icon></a>
          <a><ion-icon size="large" name="logo-instagram"></ion-icon></a>
          <a><ion-icon size="large" name="mail-outline"></ion-icon></a>
        </span>
      </footer>
    </div>
  )
}

export default Home
