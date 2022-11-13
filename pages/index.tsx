import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";


const Home: NextPage = () => {
    return(
      <div className="flex h-screen justify-center items-center py-0 px-8">
        <Header/>
      </div>
    )
}

export default Home;