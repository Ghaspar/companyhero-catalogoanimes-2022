import Head from 'next/head'
import Image from 'next/image'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, } from '@ant-design/icons';
import { Col, Layout, Row, Typography, Card } from 'antd';
import React, { useState } from "react";
import { CustomPlaceholder } from 'react-placeholder-image';
import MainHeader from "../../components/MainHeader";
import Meta from 'antd/lib/card/Meta';


const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function Lista({animesList}) {
    return (
      <>
          <Layout className="site-layout">
            <MainHeader />
            <Content
                className="site-layout-background"
                id="show-all-animes"
            >
              <Row gutter={[12,12]} justify="center">
                {
                  animesList.map((obj) => (
                    <Col className="gutter-row" align="middle" xs={24} md={12} lg={6} key={obj.id}>
                      <Card
                        hoverable
                        className="anime-post text-white"
                        cover={
                          obj.attributes.posterImage?.small 
                          ?
                          <Image src={obj.attributes.posterImage?.small}
                            width="284"
                            height="402"
                            alt="teste" />
                          :
                          <CustomPlaceholder width={284} height={402} backgroundColor="#123456" textColor="#ffffff" text="Imagem indisponivel =("/>
                        }
                        >
                        <Meta title={obj.attributes.canonicalTitle} />
                      </Card>
                    </Col>
                  ))
                }
              </Row>
            </Content>
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
  