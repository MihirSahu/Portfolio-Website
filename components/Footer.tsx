import styles from '../styles/Home.module.css'
import Link from "next/link";
// Import svg icons
import LinkedIn from '../public/logo-linkedin.svg';
import Github from '../public/logo-github.svg';
import Discord from '../public/logo-discord.svg';
import Instagram from '../public/logo-instagram.svg';
import Email from '../public/mail-outline.svg';
import Flag from '../public/flag-outline.svg';
import Medium from '../public/logo-medium.svg';
import Resume from '../public/document-text-outline.svg';
import DiscordButton from '../components/DiscordButton';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className="flex flex-row ml-2 justify-center">
          {/*
          <Link href = "https://www.linkedin.com/in/the-mihir-sahu"><a target="_blank"><i className="text-3xl pl-1 pr-1 devicon-linkedin-plain"></i></a></Link>
          <Link href = "https://github.com/MihirSahu"><a target="_blank"><i className="text-3xl pl-1 pr-1 devicon-github-original"></i></a></Link>
          */}
          <a href="/Resume.pdf" target="_blank"><Resume className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="https://www.linkedin.com/in/the-mihir-sahu" target="_blank"><LinkedIn className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="https://github.com/MihirSahu" target="_blank"><Github className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          {/*<a href="" target="_blank"><Discord className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>*/}
          <DiscordButton/>
          <a href="https://www.instagram.com/themihirsahu/" target="_blank"><Instagram className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="mailto:2002mihir@gmail.com" target="_blank"><Email className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="https://tryhackme.com/p/TheOnlyOnzz" target="_blank"><Flag className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
          <a href="https://mihirsahu.medium.com" target="_blank"><Medium className="text-3xl pl-1 pr-1" height={30} width={30} fill={'white'} /></a>
        </div>
      </footer>
    );
}

export default Footer;