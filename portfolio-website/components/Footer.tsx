import styles from '../styles/Home.module.css'
import Link from "next/link";

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className="flex flex-row ml-2 justify-center">
          <Link href = "https://www.linkedin.com/in/the-mihir-sahu"><a target="_blank"><i className="text-3xl pl-1 pr-1 devicon-linkedin-plain"></i></a></Link>
          <Link href = "https://github.com/MihirSahu"><a target="_blank"><i className="text-3xl pl-1 pr-1 devicon-github-original"></i></a></Link>
        </div>
      </footer>
    );
}

export default Footer;