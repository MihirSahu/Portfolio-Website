import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
// Import svg icons
import LinkedIn from '../public/logo-linkedin.svg';
import Github from '../public/logo-github.svg';
import Instagram from '../public/logo-instagram.svg';
import Email from '../public/mail-outline.svg';
import Flag from '../public/flag-outline.svg';
import Medium from '../public/logo-medium.svg';
import DiscordButton from '../components/DiscordButton';
import Resume from '../public/document-text-outline.svg';
import SoundCloud from '../public/logo-soundcloud.svg';


const Home: NextPage = () => {
    return(
      <div className="flex h-screen justify-center items-center py-0 px-8">
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
            <p className='text-xl'>CS and Finance @ <a href='https://uh.edu/' target="_blank" style={{color: '#c80f2e'}}>UH</a></p>
            <p className='text-xl'>President @ <a href='https://cougarcs.com/' target="_blank" style={{color: "#eb1d25"}}>CougarCS</a></p>
            <p className='text-xl'>Marketing Intern @ <a href='https://ripplematch.com/index?r=ByTweE' target="_blank" style={{color: "#3c54cd"}}>RippleMatch</a></p>
            <p className='text-xl'>Web Dev Intern @ <a href='https://www.linkedin.com/company/seminaut-inc/' target="_blank" style={{color: "#0cf4b3"}}>Seminaut</a></p>
            <p className='text-xl'>Incoming SWE Intern @ <a href='https://www.chevron.com/' target="_blank" style={{color: "#00acee"}}>Chevron</a></p>
            {/*<p className='text-xl'>Incoming SWE @ Chevron</p>*/}
          </div>
          <div className='flex space-x-4 flex-wrap justify-center gap-y-4'>
            {/*<a className={styles.resumeButton} href="/Blog" target="_blank">Blog</a>*/}
            <Link href="/About"><a className={styles.resumeButton}>About</a></Link>
            <Link href="/Experience"><a className={styles.resumeButton}>Experience</a></Link>
            <Link href="/Projects"><a className={styles.resumeButton}>Projects</a></Link>
            <Link href="/Blog_Newsletter"><a className={styles.resumeButton}>Blog/Newsletter</a></Link>
            {/*<Link href="/About"><a className={styles.resumeButton} target='_blank'>Experience</a></Link>*/}
            {/*<Link href="/Resume.pdf"><a className={styles.resumeButton} target='_blank'>Projects</a></Link>*/}
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
            <a href="https://soundcloud.com/the-mihir-sahu" target="_blank"><SoundCloud className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          </div>
        </header>
      </div>
    )
}

export default Home;