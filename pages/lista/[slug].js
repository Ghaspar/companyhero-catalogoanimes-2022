import { useRouter } from "next/router";
import MainHeader from "../../components/MainHeader";

function SingleProps() {

  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <MainHeader pageTitle={"Company Hero - "+slug} />
      <h2>desc </h2>
    </>
  )

}
  


export default SingleProps