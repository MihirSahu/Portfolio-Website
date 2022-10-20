import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  if (router.asPath == '/blog/Test') {
    return (
      <div className = "flex flex-col gap-6 justify-center items-center">
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    );
  }


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
