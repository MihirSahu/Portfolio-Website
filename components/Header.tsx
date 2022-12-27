import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
// import BackButton from '../public/chevron-back-outline.svg';
import MenuButton from '../public/menu-outline.svg';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {

    // router for back arrow button
    //const router = useRouter();

    // Responsive navbar
    const [navActive, setNavActive] = useState<boolean>(false);

    return (
      <>
        {/* For mobile devices */}
        <header className='flex flex-row justify-start mt-8 mx-6 md:hidden'>
          {/* // This is for the back arrow button
            <div className='flex justify-center'>
              <button onClick={() => router.back()}><BackButton className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></button>
            </div>
          */}
          <div className='flex justify-center self-start absolute top-6 left-8'>
            <button onClick={() => setNavActive(!navActive)}><MenuButton className="text-3xl" height={40} width={40} fill={'white'} /></button>
          </div>
          { navActive ? (
            <div id="menu" className="w-full transition-all ease-in-out bg-black">
              <div className='flex flex-col duration-300 ease-out mt-5 mx-4 space-y-5 justify-center items-center bg-black'>
                <Link href="/"><a className={styles.resumeButton} onClick={() => setNavActive(!navActive)}>Home</a></Link>
                <Link href="/About"><a className={styles.resumeButton} onClick={() => setNavActive(!navActive)}>About</a></Link>
                <Link href="/Experience"><a className={styles.resumeButton} onClick={() => setNavActive(!navActive)}>Experience</a></Link>
                <Link href="/Projects"><a className={styles.resumeButton} onClick={() => setNavActive(!navActive)}>Projects</a></Link>
                <Link href="/Blog_Newsletter"><a className={styles.resumeButton} onClick={() => setNavActive(!navActive)}>Blog/Newsletter</a></Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </header>

        {/* For PC/Desktop devices */}
        <header className='flex flex-row justify-center mt-8 mx-6 hidden md:block'>
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