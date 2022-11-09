import h1Style from "../styles/index.module.css";

const Index = () => {
  return (
    <>
      {/* Tailwind */}
      <h1 className="text-3xl font-bold underline">こんにちは</h1>
      {/* module css */}
      <h1 className={h1Style.h1_style}>こんにちは</h1>
    </>
  )
};

export default Index;
