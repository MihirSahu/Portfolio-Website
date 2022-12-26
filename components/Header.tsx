import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import BackButton from '../public/chevron-back-outline.svg';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {

    // router for back arrow button
    //const router = useRouter();

    // Responsive navbar
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
      <>
        <header className='flex flex-row justify-center mt-8 mx-6'>
          {/* // This is for the back arrow button
            <div className='flex justify-center'>
              <button onClick={() => router.back()}><BackButton className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></button>
            </div>
          */}
          <div className='flex flex-row space-x-4 flex-wrap gap-y-4 justify-center'>
            <Link href="/"><a className={styles.resumeButton}>Home</a></Link>
            <Link href="/About"><a className={styles.resumeButton}>About</a></Link>
            <Link href="/Experience"><a className={styles.resumeButton}>Experience</a></Link>
            <Link href="/Projects"><a className={styles.resumeButton}>Projects</a></Link>
            <Link href="/Blog_Newsletter"><a className={styles.resumeButton}>Blog/Newsletter</a></Link>
          </div>
        </header>
      </>
    );
}

export default Header;