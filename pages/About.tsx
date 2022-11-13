import styles from '../styles/Home.module.css'
import Link from 'next/link';

const About = () => {
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
        </div>
        </main>
    </div>
    );
}

export default About;