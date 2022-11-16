import styles from '../styles/Home.module.css'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Experience = () => {
    return (

    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <div className={styles.sectionTitle}>
              <TypeAnimation
                sequence={[
                  "Experience",
                  2000,
                  () => {console.log("Done typing");}
                ]}
                wrapper="div"
                cursor={true}
                style={{ color: '#0070f3', textDecoration: 'none' }}
              />
          </div>
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

          <div className={styles.sectionTitle}>
              <TypeAnimation
                sequence={[
                  "Activities",
                  2000,
                  () => {console.log("Done typing");}
                ]}
                wrapper="div"
                cursor={true}
                style={{ color: '#0070f3', textDecoration: 'none' }}
              />
          </div>
          <div className="flex flex-col space-y-8">
            <Link href="/CougarCS">
              <a className={styles.sectionEntry}>CougarCS</a>
            </Link>
            <Link href="/CodeRED">
              <a className={styles.sectionEntry}>CodeRED Odyssey</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
    );
}

export default Experience;