import Head from 'next/head'
import Image from 'next/image'
import { Col, Layout, Row, Card, Pagination } from 'antd';
import React, { useEffect, useState } from "react";
import { CustomPlaceholder } from 'react-placeholder-image';
import MainHeader from "../../components/MainHeader";
import Meta from 'antd/lib/card/Meta';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Content } = Layout;

async function loadAnimes(page){
  try {
    const res = await fetch("https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]="+(page*8));
    const animes = await res.json();
    console.log(res.status);
    return animes.data;
  } catch (error) {
    
    return false;
  }
 
}

export default function Lista({animesList}) {
    const router = useRouter();
    const [pagnation, setPagnation] = useState(0);
    const onChange = async (page) => {
      setPagnation(page);
      router.replace(`lista?page=${page-1}`);
    };
    return (
      <>
          <Layout className="site-layout">
            <MainHeader />
            <Content
              className="bg-primary-secondary"
            >
              <Pagination className="pagnation-custom" current={pagnation} onChange={onChange} total={12062} />
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
  

export async function getServerSideProps(res) {

  const curretPage = (res.query.page ? res.query.page: 0);
  const animes = await loadAnimes(curretPage)

  if (!animes) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return { props: { 
    animesList: animes
   } 
  }
}

