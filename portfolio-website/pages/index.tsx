import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mihir Sahu</title>
        <link rel="icon" href="/m.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      </Head>

      <main className={styles.main}>
        <div>
          <p className={styles.sectionTitle}>
            About Me
          </p>
          <p className={styles.description}>
            Hi! I'm Mihir and I'm a third year student at the University of Houston. I've wanted to learn more about technology from the moment that I was introduced to it, and I've decided to select Computer Science as one of my majors so that I can continue to dedicate myself to it. I've learned a lot, and I have no intention of stopping now.
          </p>
          <p className={styles.description}>
            In my free time you'll find me reading, browsing Reddit, playing the latest competitive first person shooter games, hanging out with friends, or learning the most random things that you can think of, such as how to solve a rubik's cube in 20 moves or how to make shuffling playing cards look cool.
          </p>

          <p className={styles.sectionTitle}>
            Education
          </p>
          <p className={styles.sectionTitle}>
            Experience
          </p>
          <p className={styles.sectionTitle}>
            Projects
          </p>
        </div>

        <div className={styles.grid}>
          <a href="https://github.com/Recharge-App" target="_blank" className={styles.card}>
            <h2>Recharge &rarr;</h2>
            <p>Full stack mobile app for the UH community to find events and activities across campus.</p>
          </a>

          <a href="https://github.com/MihirSahu/WatchPartyBot" target="_blank" className={styles.card}>
            <h2>Watch Party Bot &rarr;</h2>
            <p>A Discord bot to manage watch parties on the CougarCS Discord server.</p>
          </a>

          <a
            href="https://github.com/MihirSahu/Personal-Configs"
            target="_blank"
            className={styles.card}
          >
            <h2>Home Server &rarr;</h2>
            <p>Created a home server to host a variety of services using Docker on a GNU/Linux system.</p>
          </a>

          <a
            href="https://github.com/MihirSahu/Portfolio-Website"
            target="_blank"
            className={styles.card}
          >
            <h2>Portfolio Website &rarr;</h2>
            <p>
              My new portfolio website.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
