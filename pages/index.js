import Head from 'next/head'
import "antd/dist/antd.css";
import Banner from '../components/Banner';
import MainHeader from '../components/MainHeader';
import { NextSeo } from 'next-seo';


export default function Home() {
  return (
    <>
      <NextSeo
        title="Company Hero - Projeto de catalogo de animes!"
        description="Projeto de catalogo de animes, objetivo de desafiar a utilização de novas ferramentas e adição a portifólio pessoal"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Company Hero - Projeto de catalogo de animes!',
          description: 'Projeto de catalogo de animes, objetivo de desafiar a utilização de novas ferramentas e adição a portifólio pessoal',
          images: [
            {
              url: '/banner.webp',
              width: 800,
              height: 600,
              alt: 'Animes banner',
              type: 'image/webp',
            }
          ],
          site_name: 'Company Hero - Projeto de catalogo de animes!',
        }}
      />
      
      <MainHeader pageTitle="Company Hero - Projeto de catalogo de animes!" />
      <Banner />
      
    </>
  )
}
