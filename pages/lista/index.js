import Head from 'next/head'
import Image from 'next/image'
import { Col, Layout, Row, Typography, Card } from 'antd';
import React, { useState } from "react";
import { CustomPlaceholder } from 'react-placeholder-image';
import MainHeader from "../../components/MainHeader";
import Meta from 'antd/lib/card/Meta';
import Link from 'next/link';

const { Content } = Layout;

export default function Lista({animesList}) {
    return (
      <>
          <Layout className="site-layout">
            <MainHeader />
            <Content
              className="bg-primary-secondary"
            >
              <Row className="content-cards" justify="center">
                {
                  animesList.map((obj) => (
                    <Col align="middle" xs={12} md={8} lg={5} xl={5} key={obj.id}>
                      <Link href={"/lista/"+obj.attributes.slug}>
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
                      </Link>
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

  const res = await fetch("https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]=0")
  const animes = await res.json()
  console.log(animes.data[2]);

  return { props: { 
    animesList: animes.data
   } 
  }
}
  