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
          <div className="flex flex-col mt-8">
            <Link href="/Seatgull">
              {/* Long card structure */}
              <a className={styles.card}>
                <div className='flex flex-row justify-between'>
                  <div>
                    Seatgull &rarr;
                  </div>
                  <div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/NeuhausEducationCenter">
              <a className={styles.card}>Neuhaus Education Center &rarr;</a>
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
          <div className="flex flex-col mt-8">
            <Link href="/CougarCS">
              <a className={styles.card}>CougarCS &rarr;</a>
            </Link>
            <Link href="/CodeRED">
              <a className={styles.card}>CodeRED Odyssey &rarr;</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
    );
}

export default Experience;