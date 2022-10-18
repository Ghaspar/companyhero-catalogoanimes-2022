import { Typography, Layout } from 'antd';
import styles from './style.module.scss'

const { Title } = Typography;

export default function MainHeader({pageTitle}) {
    return (
      <>
        <Layout className={styles.mainTitle}>
            <Title align="middle" className="text-primary">{pageTitle}</Title>
        </Layout>
      </>
    )
}
  