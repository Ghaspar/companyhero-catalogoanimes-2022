import React from "react";
import { Layout } from 'antd';
import styles from './style.module.scss'
import Link from 'next/link';

export default function Banner() {
    return (
      <>
      <Layout className={styles.banner}>
        <span className="shadow"></span>
        <Link href="/lista">
          <a>Entre no catalogo!</a>
        </Link>
      </Layout>
      </>
    )
}
  