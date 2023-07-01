import styles from '../styles/Home.module.css'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <div className='flex flex-wrap justify-center'>
            <div className='w-6/12 sm:w-3/12 px-4 rounded-full'>
              <img src='/Discord-Profile-Pic.png'></img>
            </div>
          </div>
          <div className={styles.sectionTitle}>
            <TypeAnimation
              sequence={[
                "About Me",
                2000,
                () => {console.log("Done typing");}
              ]}
              wrapper="div"
              cursor={true}
              style={{ color: '#0070f3', textDecoration: 'none'}}
            />
          </div>
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

          <div className={styles.sectionTitle}>
            <TypeAnimation
              sequence={[
                "Education",
                2000,
                () => {console.log("Done typing");}
              ]}
              wrapper="div"
              cursor={true}
              style={{ color: '#0070f3', textDecoration: 'none'}}
            />
          </div>
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
          <div className={styles.sectionTitle}>
            <TypeAnimation
              sequence={[
                "Currently I'm...",
                2000,
                () => {console.log("Done typing");}
              ]}
              wrapper="div"
              cursor={true}
              style={{ color: '#0070f3', textDecoration: 'none'}}
            />
          </div>
          <div className='flex flex-col my-8 space-y-2 justify-center text-center'>
            <div><span className='text-niceblue'>Reading</span> The Charisma Myth</div>
            <div><span className='text-niceblue'>Playing</span> Fortnite</div>
            <div><span className='text-niceblue'>Listening</span> to Pop music</div>
            {/*<div><span className='text-niceblue'>Learning</span> skateboarding and music production</div>*/}
          </div>
        </div>
        </main>
    </div>
    );
}

export default About;