import styles from '../styles/Home.module.css'
import { TypeAnimation } from 'react-type-animation';
// Import svg icons
import LinkedIn from '../public/logo-linkedin.svg';
import Github from '../public/logo-github.svg';
import Instagram from '../public/logo-instagram.svg';
import Email from '../public/mail-outline.svg';
import Flag from '../public/flag-outline.svg';
import Medium from '../public/logo-medium.svg';
import DiscordButton from './DiscordButton';
import Resume from '../public/document-text-outline.svg';


const Header = () => {
    return (
      <>
      <header className="flex flex-col justify-center items-center py-8 space-y-9">
        <h1 className="m-0 text-6xl flex flex-col justify-center text-center">I'm&nbsp;
        <TypeAnimation
          sequence={[
            "Mihir Sahu.",
            2000,
            "a student.",
            2000,
            "a developer.",
            2000,
            "a learner.",
            2000,
            "Mihir Sahu.",
            2000,
            () => {console.log("Done typing");}
          ]}
          wrapper="div"
          cursor={true}
          style={{ color: '#0070f3', textDecoration: 'none'}}
        />
        </h1>
        <div className='text-center'>
          <p className='text-xl'>CS and Finance @ UH</p>
          <p className='text-xl'>Incoming SWE @ Chevron</p>
        </div>
        <div className='flex flex-row space-x-4'>
          {/*<a className={styles.resumeButton} href="/Blog" target="_blank">Blog</a>*/}
          <a className={styles.resumeButton} href="/">About</a>
          <a className={styles.resumeButton} href="/Resume.pdf">Experience</a>
          <a className={styles.resumeButton} href="/Resume.pdf">Projects</a>
        </div>
        <div className="flex flex-row ml-2 justify-center">
          {/*
          <Link href = "https://www.linkedin.com/in/the-mihir-sahu"><a target="_blank"><i className="text-3xl pl-1 pr-1 devicon-linkedin-plain"></i></a></Link>
          <Link href = "https://github.com/MihirSahu"><a target="_blank"><i className="text-3xl pl-1 pr-1 devicon-github-original"></i></a></Link>
          */}
          <a href="/Resume.pdf" target="_blank"><Resume className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="https://www.linkedin.com/in/the-mihir-sahu" target="_blank"><LinkedIn className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="https://github.com/MihirSahu" target="_blank"><Github className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <DiscordButton/>
          <a href="https://www.instagram.com/themihirsahu/" target="_blank"><Instagram className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="mailto:2002mihir@gmail.com" target="_blank"><Email className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="https://tryhackme.com/p/TheOnlyOnzz" target="_blank"><Flag className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="https://mihirsahu.medium.com" target="_blank"><Medium className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
        </div>
      </header>
      </>
    );
}

export default Header;