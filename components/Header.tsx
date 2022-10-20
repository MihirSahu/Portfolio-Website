import styles from '../styles/Home.module.css'
import { TypeAnimation } from 'react-type-animation';
// Import svg icons
import LinkedIn from '../public/logo-linkedin.svg';
import Github from '../public/logo-github.svg';
import Instagram from '../public/logo-instagram.svg';
import Email from '../public/mail-outline.svg';
import Flag from '../public/flag-outline.svg';
import DiscordButton from './DiscordButton';


const Header = () => {
    return (
      <>
      <header className={styles.header}>
        <h1 className="m-0 text-6xl flex flex-col justify-center mb-3 text-center">I'm&nbsp;
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
        <p className='text-xl'>Computer Science and Finance @ UH</p>
        <div className="flex flex-row ml-2 justify-center mt-3">
          {/*
          <Link href = "https://www.linkedin.com/in/the-mihir-sahu"><a target="_blank"><i className="text-3xl pl-1 pr-1 devicon-linkedin-plain"></i></a></Link>
          <Link href = "https://github.com/MihirSahu"><a target="_blank"><i className="text-3xl pl-1 pr-1 devicon-github-original"></i></a></Link>
          */}
          <a href="https://linkedin.com/in/mihir-sahu-ab5b6020b" target="_blank"><LinkedIn className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="https://github.com/MihirSahu" target="_blank"><Github className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <DiscordButton/>
          <a href="https://www.instagram.com/themihirsahu/" target="_blank"><Instagram className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="mailto:2002mihir@gmail.com" target="_blank"><Email className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="https://tryhackme.com/p/TheOnlyOnzz" target="_blank"><Flag className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
        </div>
        <div className='flex flex-row space-x-8'>
          <a className={styles.resumeButton} href="/Resume.pdf" target="_blank">Résumé</a>
          <a className={styles.resumeButton} href="/blog/Test" target="_blank">Blog</a>
        </div>
      </header>
      </>
    );
}

export default Header;