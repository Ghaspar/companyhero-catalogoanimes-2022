import 'antd/dist/antd.css'
import { Layout } from 'antd'
import '../styles/globals.scss'
import Footer from '../components/Footer';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
      <title>Company Hero - Catalogo de animes! | Títuto Default</title>
      <meta name="keywords" content="HTML, CSS, JavaScript"></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout className="layout">
      <Component {...pageProps} />
    </Layout>
    <Footer />
    </>
  )
    
}

export default MyApp
