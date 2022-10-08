import styles from '../styles/Home.module.css'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
      <header className={styles.header}>
        <h1 className="m-0 text-6xl flex flex-row justify-center mb-3">I'm&nbsp;
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
              () => {console.log("Done typing");}
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ color: '#0070f3', textDecoration: 'none' }}
          />
        </h1>
        <p className="text-xl">Student & Software Engineer</p>
        <p className='text-xl'>Computer Science and Finance @ UH</p>
      </header>
    );
}

export default Header;