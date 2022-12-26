import styles from "../styles/Home.module.css";
import { TypeAnimation } from 'react-type-animation';


const Blog_NewsLetter = () => {
    return (
    <div className={styles.container}>
        <main className={styles.main}>
            <div>
                <div className={styles.sectionTitle}>
                    <TypeAnimation
                      sequence={[
                        "Blog",
                        2000,
                        () => {console.log("Done typing");}
                      ]}
                      wrapper="div"
                      cursor={true}
                      style={{ color: '#0070f3', textDecoration: 'none'}}
                    />
                </div>
                <p className={styles.description}>
                    I've recently started writing articles on Medium about projects that I've worked on, things that have inspired me, or opinionated spiels about random things.
                </p>
                <div className={styles.description}>
                    <a className={styles.card} href="https://mihirsahu.medium.com/" target="_blank">mihirsahu.medium.com &rarr;</a>
                </div>
                <br></br>
                <div className={styles.sectionTitle}>
                    <TypeAnimation
                      sequence={[
                        "Newsletter",
                        2000,
                        () => {console.log("Done typing");}
                      ]}
                      wrapper="div"
                      cursor={true}
                      style={{ color: '#0070f3', textDecoration: 'none'}}
                    />
                </div>
                <div className={styles.newsletter}>
                    I'm also starting a weekly newsletter called <b className="text-niceblue">What the Tech?</b> where I'll compile a list of news articles, promising developer tools, and other resources that are essential for developers and tech fanatics to know about. Subscribe to the newsletter through the form below!
                    <iframe className="ml-auto mr-auto" width="540" height="800" src="https://4bcd6d63.sibforms.com/serve/MUIEAF_TLI7_ipmLhCkn2BKHQxPxz0p0NQHrrmx7qBPj_XGpMO7mV5qMigs8Zhsno0KsDw4vHJwxbCEyrthEkWbmJdDGS172SjZpqEcoaqICjrNyeykMajySXPrX0h33UuW7uJ3-OXBigCMRAHPJWA89qWskdGco20m37Gay9zYxsIQZ6iBWShB3AuDfYw_U-Qg16nVc1TLssa4m" frameBorder="0" scrolling="no" allowFullScreen></iframe>
                </div>
            </div>
        </main>
    </div>
    );
}

export default Blog_NewsLetter;