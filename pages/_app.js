import 'antd/dist/antd.css'
import { Layout } from 'antd'
import '../styles/globals.scss'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Layout className="layout">
      <Component {...pageProps} />
    </Layout>
    <Footer />
    </>
  )
    
}

export default MyApp
