import Link from "next/link";
import * as style from "../styles/index.module.scss";

const Index = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <Link href={"/contact"}>Contactページへ移動</Link>
    </>
  )
};

export default Index;
