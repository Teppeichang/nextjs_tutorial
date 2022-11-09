import Link from "next/link";
// import h1Style from "../styles/index.module.css";

const Index = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">こんにちは</h1>
      <Link href={"/contact"}>Contactページへ移動</Link>
      {/* module cssを使用する場合 */}
      {/* <h1 className={h1Style.h1_style}>こんにちは</h1> */}
    </>
  )
};

export default Index;
