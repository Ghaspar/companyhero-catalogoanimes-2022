import { useRouter } from "next/router";

function SingleProps() {

  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <h1>Anime - {slug}</h1>
      <h2>desc </h2>
    </>
  )

}
  


export default SingleProps