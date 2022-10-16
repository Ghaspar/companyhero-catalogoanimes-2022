import { Typography, Layout } from 'antd';
import React from "react";
import styles from './style.module.scss'

const { Title } = Typography;

export default function MainHeader() {
    return (
      <>
        <Layout className={styles.mainTitle}>
            <Title align="middle" className="text-primary">Company Hero - Catalogo de animes!</Title>
        </Layout>
      </>
    )
}
  