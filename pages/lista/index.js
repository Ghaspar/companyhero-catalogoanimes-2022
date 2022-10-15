import Head from 'next/head'
import Image from 'next/image'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from "react";
import Link from 'next/link';

const { Header, Sider, Content } = Layout;

export default function Lista({animesList}) {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <>
        <Layout className="layout">
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                  {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 'nav 1',
                  },
                  {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: 'nav 2',
                  },
                  {
                    key: '3',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                  },
                ]}
            />
          </Sider>
          <Layout className="site-layout">
            <Header
                className="site-layout-background"
                style={{
                  padding: 0,
                }}
            >
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </Header>
            <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
        {/* <h1>Catalogo dos animes! </h1>
        <Button type="primary">Button</Button>
        {
          animesList.map((obj) => (
            <article key={obj.id}>
              <p></p>
            </article>
          ))
        } */}

      </>
    )
}
  

export async function getServerSideProps() {

  const res = await fetch("https://kitsu.io/api/edge/anime")
  const animes = await res.json()
  console.log(animes.data[1].attributes.titles.en);

  return { props: { 
    animesList: animes.data
   } 
  }
}
  