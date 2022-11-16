import styles from '../styles/Home.module.css'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Projects = () => {
    return (

    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.sectionTitle}>
            <TypeAnimation
              sequence={[
                "Projects",
                2000,
                () => {console.log("Done typing");}
              ]}
              wrapper="div"
              cursor={true}
              style={{ marginBottom: "2rem", color: '#0070f3', textDecoration: 'none' }}
            />
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

export default Projects;