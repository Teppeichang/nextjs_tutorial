import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import * as style from "../../styles/singleBlog.module.scss";
import { getAllBlogs, getSingleBlog } from "../../utils/mdQueries";
import PrevNext from "../../components/prevNext";

const SingleBlog = ({title, excerpt, frontmatter, markdownBody, prev, next}) => {
  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <div className={style.hero}>
        <Image src={frontmatter.image} alt="blog-image" height="500" width="1000" />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <ReactMarkdown>{markdownBody}</ReactMarkdown>
        </div>
        <PrevNext prev={prev} next={next} />
      </div>
    </Layout>
  );
};

export default SingleBlog;

export async function getStaticPaths() {
  const { orderedBlogs } = await getAllBlogs()
  const paths = orderedBlogs.map((orderedBlog) => `/blog/${orderedBlog.slug}`)

  return {
      paths: paths,
      fallback: false,
  }
}

export async function getStaticProps(context) {
  const { singleDocument } = await getSingleBlog(context)

  const { orderedBlogs } = await getAllBlogs()
  const prev = orderedBlogs.filter(orderedBlog => orderedBlog.frontmatter.id === singleDocument.data.id - 1)
  const next = orderedBlogs.filter(orderedBlog => orderedBlog.frontmatter.id === singleDocument.data.id + 1)

  return {
    props: {
      frontmatter: singleDocument.data,
      markdownBody: singleDocument.content,
      prev: prev,
      next: next,
    }
  }
}
