import Head from 'next/head'
import Image from 'next/image'
import { Button, DatePicker, Space, version } from "antd";
import Link from 'next/link';

export default function Lista({animesList}) {

    return (
      <>
        <h1>Catalogo dos animes! </h1>
        {
          animesList.map((obj) => (
            <article key={obj.id}>
              <p></p>
            </article>
          ))
        }

      </>
    )
}
  

export async function getServerSideProps() {

  const res = await fetch("https://kitsu.io/api/edge/anime")
  const animes = await res.json()
  console.log(animes.data);
  
  return { props: { 
    animesList: animes.data
   } 
  }
}
  