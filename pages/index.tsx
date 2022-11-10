import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <p className={styles.sectionTitle}>About Me</p>
          <p className={styles.description}>
            Hi! I'm Mihir and I'm a third year student double majoring in
            Computer Science and Finance at the University of Houston.{" "}
          </p>
          <p className={styles.description}>
            I've wanted to learn more about computers from the moment that I
            was introduced to them, and I've decided to select Computer Science as
            one of my majors so that I can continue to do so.
          </p>
          <p className={styles.description}>
            In my free time you'll find me reading, browsing Reddit, playing the
            latest competitive first person shooter games, hanging out with
            friends, or learning the most random things that you can think of,
            such as how to solve a rubik's cube in 20 moves or how to make
            shuffling playing cards look cool.
          </p>
          {/*
          <Carousel
            showStatus={false}
            autoPlay={true}
            interval={5000}
            transitionTime={1000}
            infiniteLoop={true}
            showThumbs={false}
          >
            <div>
              <img src="Profile-Pic.jpg"/>
            </div>
            <div>
              <img src="CougarCS_Officers.jpeg"/>
            </div>
            <div>
              <img src="CodeRED_Officers.jpg"/>
            </div>
          </Carousel>
          */}

          <p className={styles.sectionTitle}>Education</p>
          <div className={styles.description}>
            Bachelor of Science in Computer Science <br></br>
            <a
              className="hover:text-niceblue"
              href="https://www.uh.edu/nsm/"
              target="_blank"
            >
              College of Natural Sciences and Mathematics
            </a>
            <div className={styles.description}>
              Bachelor of Business Administration in Finance <br></br>
              <a
                className="hover:text-niceblue"
                href="https://www.bauer.uh.edu/"
                target="_blank"
              >
                C. T. Bauer College of Business
              </a>
            </div>
          </div>

          <div className={styles.sectionTitle}>Experience</div>
          <div className="flex flex-col space-y-8">
            <Link href="/Buzly">
              <a className={styles.sectionEntry}>Buzly</a>
            </Link>
            <Link href="/Seatgull">
              <a className={styles.sectionEntry}>Seatgull</a>
            </Link>
            <Link href="/NeuhausEducationCenter">
              <a className={styles.sectionEntry}>Neuhaus Education Center</a>
            </Link>
          </div>

          <div className={styles.sectionTitle}>Activities</div>
          <div className="flex flex-col space-y-8">
            <Link href="/CougarCS">
              <a className={styles.sectionEntry}>CougarCS</a>
            </Link>
            <Link href="/CodeRED">
              <a className={styles.sectionEntry}>CodeRED Odyssey</a>
            </Link>
          </div>

          <p className={styles.sectionTitle}>Projects</p>
        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/Recharge-App"
            target="_blank"
            className={styles.card}
          >
            <h2>Recharge &rarr;</h2>
            <p>
              Full stack mobile app for the UH community to find events and
              activities across campus.
            </p>
          </a>

          <a
            href="https://github.com/MihirSahu/WatchPartyBot"
            target="_blank"
            className={styles.card}
          >
            <h2>Watch Party Bot &rarr;</h2>
            <p>
              A Discord bot to manage watch parties on the CougarCS Discord
              server.
            </p>
          </a>

          <a
            href="https://github.com/MihirSahu/Personal-Configs"
            target="_blank"
            className={styles.card}
          >
            <h2>Home Server &rarr;</h2>
            <p>
              Created a home server to host a variety of services using Docker
              on a GNU/Linux system.
            </p>
          </a>

          <a
            href="https://github.com/MihirSahu/Portfolio-Website"
            target="_blank"
            className={styles.card}
          >
            <h2>Portfolio Website &rarr;</h2>
            <p>My new portfolio website.</p>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home
