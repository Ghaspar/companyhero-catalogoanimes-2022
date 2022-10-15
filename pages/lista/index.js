import Head from 'next/head'
import Image from 'next/image'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Col, Layout, Menu, Row } from 'antd';
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { CustomPlaceholder } from 'react-placeholder-image';

const { Header, Sider, Content } = Layout;

const col = {
  padding: '2rem 1rem',
  maxWidth: '400px'
};

export default function Lista({animesList}) {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <>
        <Layout className="layout">
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="title">Categorias dos Animes</div>
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
                id="show-all-animes"
                col=""
            >
              <Row gutter={[12,12]}>
                {
                  animesList.map((obj) => (
                    <Col className="gutter-row" xs={12} md={6} key={obj.id}>
                      <article >
                        {
                          obj.attributes.posterImage?.small 
                          ?
                          <Image src={obj.attributes.posterImage?.small}
                            width="284"
                            height="402"
                            alt="teste" />
                          :
                          <CustomPlaceholder width={284} height={402} backgroundColor="#123456" textColor="#ffffff" text="Imagem indisponivel =("/>
                        }
                        <h2>{obj.attributes.canonicalTitle}</h2>
                      </article>
                    </Col>
                  ))
                }
              </Row>
            </Content>
          </Layout>
        </Layout>

      </>
    )
}
  

export async function getServerSideProps() {

  const res = await fetch("https://kitsu.io/api/edge/anime?page[limit]=4&page[offset]=0")
  const animes = await res.json()
  // console.log(animes.data[4].attributes);

  return { props: { 
    animesList: animes.data
   } 
  }
}
  