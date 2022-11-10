import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import * as style from "../../styles/singleBlog.module.scss";
import { getAllBlogs, getSingleBlog } from "../../utils/mdQueries";
import PrevNext from "../../components/prevNext";

const SingleBlog = (props) => {
  return (
    <Layout>
      <Seo title={props.title} description={props.excerpt} />
      <div className={style.hero}>
        <Image src={props.frontmatter.image} alt="blog-image" height="500" width="1000" />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{props.frontmatter.title}</h1>
          <p>{props.frontmatter.date}</p>
          <ReactMarkdown>{props.markdownBody}</ReactMarkdown>
        </div>
        <PrevNext prev={props.prev} next={props.next} />
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
