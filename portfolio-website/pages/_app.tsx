import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className = "flex flex-col gap-6">
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </Layout>
  )
}

export default MyApp
