import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from 'next/router';
import Head from 'next/head'

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
    <>
      <Head>
        <title>Mihir Sahu</title>
        <link rel="icon" href="/beach_pic_favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
      </Head>

      <Layout>
        <div className = "flex flex-col gap-6">
          <Header/>
          <Component {...pageProps} />
          <Footer/>
        </div>
      </Layout>
    </>
  )
}

export default MyApp
