import { Breadcrumb } from 'antd'
import styles from './style.module.scss'
import Link from 'next/link'

export default function BreadCrumb({link, current}) {
    return (
      <>
        <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item>
                <Link href="/">
                    Home
                </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link href="/lista">
                    Lista
                </Link>
            </Breadcrumb.Item>
            {
                link && current && 
                <Breadcrumb.Item>
                    <Link href={link}>
                        {current}
                    </Link>
                </Breadcrumb.Item>
            }
            
        </Breadcrumb>
      </>
    )
}
  