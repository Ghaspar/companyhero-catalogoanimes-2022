import { useRouter } from "next/router";
import MainHeader from "../../../components/MainHeader";
import Image from 'next/image';
import moment from 'moment';
import { Col, Typography, Layout, Row, DatePicker} from 'antd';
import { CustomPlaceholder } from 'react-placeholder-image';
import YouTube from 'react-youtube';
import { NextSeo } from "next-seo";
import BreadCrumb from "../../../components/BreadCrumb";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const dateFormat = 'YYYY-MM-DD';

async function loadSingleAnime(page){
  try {
    const res = await fetch("https://kitsu.io/api/edge/anime/"+page);
    const animes = await res.json();
    return animes.data;
  } catch (error) {
    
    return false;
  }
 
}

export default function Anime({animeInfos}) {

  const router = useRouter();

  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };


  return (
    <>
      <NextSeo
        title={"Company Hero - "+(animeInfos.attributes.canonicalTitle ? animeInfos.attributes.canonicalTitle : animeInfos.attributes.titles.en)}
        description={animeInfos.attributes.description.substring(0, 250)}
        canonical={"https://www.canonical.ie"+router.asPath}
        openGraph={{
          url: "https://www.canonical.ie"+router.asPath,
          title: "Company Hero - "+(animeInfos.attributes.canonicalTitle ? animeInfos.attributes.canonicalTitle : animeInfos.attributes.titles.en),
          description: animeInfos.attributes.description.substring(0, 250),
          images: [
            {
              url: animeInfos.attributes.posterImage?.original,
              width: 800,
              height: 600,
              alt: 'Animes banner',
              type: 'image/webp',
            }
          ],
          site_name: "Company Hero - "+(animeInfos.attributes.canonicalTitle ? animeInfos.attributes.canonicalTitle : animeInfos.attributes.titles.en),
        }}
      />
      <MainHeader pageTitle={"Company Hero - "+(animeInfos.attributes.canonicalTitle ? animeInfos.attributes.canonicalTitle : animeInfos.attributes.titles.en)} />
      <BreadCrumb link={router.asPath} current={animeInfos.attributes.slug}/>
      <Layout align="middle">
        <Row justify="center" className="bg-primary-secondary">
          <Col xs={24} md={24} lg={12} xl={12} >
            {
              animeInfos.attributes?.youtubeVideoId
              ?
              <YouTube className="videoWrapper" videoId={animeInfos.attributes?.youtubeVideoId} opts={opts} />
              :
              <CustomPlaceholder className="img-responsive" width={600} height={300} backgroundColor="#f06" textColor="#ffffff" text="Video indisponivel =("/>
            }
          </Col>
        </Row>
        <Content id="singleAnimeContent">
          <Row>
            <Col xs={24} md={6} lg={6} xl={6}>
            {
              animeInfos.attributes.posterImage?.original 
              ?
              <Image src={animeInfos.attributes.posterImage?.original}
                width="284"
                height="402"
                alt="teste" />
              :
              <CustomPlaceholder width={284} height={402} backgroundColor="#123456" textColor="#ffffff" text="Imagem indisponivel =("/>
            }
            </Col>
            <Col xs={24} md={12} lg={12} xl={12}>
              <Title level={2}>Sinopse:</Title>
                <Paragraph>
                  {animeInfos.attributes.synopsis}
                </Paragraph>
            </Col>
            <Col xs={24} md={6} lg={6} xl={6}>
              <article className="animeInfos">
                <Title level={3}>Inicio:</Title>
                <DatePicker defaultValue={moment(animeInfos.attributes.startDate, dateFormat)} disabled />
              </article>
              {
                animeInfos.attributes.nextRelease
                ?
                <article className="animeInfos">
                  <Title level={3}>Próximo episódio:</Title>
                  <DatePicker defaultValue={moment(animeInfos.attributes.nextRelease, dateFormat)} disabled />
                </article>
                :
                <article className="animeInfos">
                  <Title level={3}>Data de termino</Title>
                  <DatePicker defaultValue={moment(animeInfos.attributes.endDate, dateFormat)} disabled />
                </article>
              }
              <article className="animeInfos">
                <Title level={3}>Classificação:</Title>
                <Paragraph>
                  {animeInfos.attributes.ageRatingGuide}
                </Paragraph>
              </article>
              
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  )

}


export async function getServerSideProps(req) {

  const anime = await loadSingleAnime(req.query.id[1])

  if (!anime) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return { props: { 
    animeInfos: anime
   } 
  }
}
