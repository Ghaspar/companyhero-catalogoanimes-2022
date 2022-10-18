import { Breadcrumb } from 'antd';
import styles from './style.module.scss'

export default function BreadCrumb() {
    return (
      <>
        <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
            <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </>
    )
}
  