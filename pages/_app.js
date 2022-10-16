import 'antd/dist/antd.css'
import { Layout } from 'antd'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Layout className="layout">
      <Component {...pageProps} />
    </Layout>
    </>
  )
    
}

export default MyApp
