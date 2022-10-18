import { Layout, Typography } from 'antd';
import styles from './style.module.scss'
import Link from 'next/link';
import { Footer } from "antd/lib/layout/layout";
import { GithubOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function Banner() {
    return (
      <>
      <Layout className={styles.footerContent+" bg-primary-secondary"}>
        <Footer align="middle" className={styles.footer}>
            <Text className="text-white">Lucas Gaspar Firmino</Text>
            <Link href="https://github.com/Ghaspar/companyhero-catalogoanimes-2022/tree/main">
                <a className="text-white" target="_blank">Visit this on Github! <GithubOutlined /></a>
            </Link>
        </Footer>
      </Layout>
      </>
    )
}
  


