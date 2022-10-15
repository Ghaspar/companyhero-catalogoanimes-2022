import Head from 'next/head'
import Image from 'next/image'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, } from '@ant-design/icons';
import { Col, Layout, Menu, Row, Typography } from 'antd';
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { CustomPlaceholder } from 'react-placeholder-image';

const { Header, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function Lista({animesList}) {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <>
        <Layout className="layout">
          <Layout className="site-layout">
            <Header className="site-layout-background">
              <Title>Company Hero - Catalogo de animes!</Title>
            </Header>
            <Content
                className="site-layout-background"
                id="show-all-animes"
                col=""
            >
              <Row gutter={[12,12]}>
                {
                  animesList.map((obj) => (
                    <Col className="gutter-row" xs={24} md={12} lg={6} key={obj.id}>
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
                        <Title level={2}>{obj.attributes.canonicalTitle}</Title>
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
  console.log(animes.data[2]);

  return { props: { 
    animesList: animes.data
   } 
  }
}
  