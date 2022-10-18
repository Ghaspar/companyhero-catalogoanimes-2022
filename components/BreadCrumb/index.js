import { Breadcrumb } from 'antd';
import styles from './style.module.scss'

export default function BreadCrumb({link, current}) {
    return (
      <>
        <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item>
                <a href="/">Home</a> 
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="/lista">Lista</a> 
            </Breadcrumb.Item>
            {
                link && current && 
                <Breadcrumb.Item>
                    <a href={link}>{current}</a> 
                </Breadcrumb.Item>
            }
            
        </Breadcrumb>
      </>
    )
}
  