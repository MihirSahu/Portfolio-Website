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
          <div className="flex flex-col">
            <Link href="/Seatgull">
              <a className={styles.experienceCard}>
                <div className='flex flex-row justify-between'>
                  <div>
                    Seatgull &rarr;
                  </div>
                  <div>
                    Software Developer
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/NeuhausEducationCenter">
              <a className={styles.experienceCard}>
                <div className='flex flex-row justify-between'>
                  <div>
                    Neuhaus Education Center &rarr;
                  </div>
                  <div>
                    Software Developer
                  </div>
                </div>
              </a>
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
              <a className={styles.experienceCard}>
                <div className='flex flex-row justify-between'>
                  <div>
                    CougarCS &rarr;
                  </div>
                  <div>
                    Software Developer
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/CodeRED">
              <a className={styles.experienceCard}>
                <div className='flex flex-row justify-between'>
                  <div>
                    CodeRED &rarr;
                  </div>
                  <div>
                    Software Developer
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
    );
}

export default Experience;