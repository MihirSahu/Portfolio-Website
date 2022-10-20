import styles from '../styles/Home.module.css'
import Link from 'next/link';


const Blog = () => {

    return(
        <>
            <div className={styles.grid}>
                <Link href="/blog/Corridor">
                    <a
                        target="_blank"
                        className={styles.longCard}
                    >
                        <h2>TryHackMe Corridor CTF Writeup &rarr;</h2>
                        <p>
                            My writeup for John Hammond's Corridor CTF.
                        </p>
                    </a>
                </Link>
            </div>
        </>
    );
}

export default Blog;