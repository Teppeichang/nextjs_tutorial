import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import * as style from "../../styles/singleBlog.module.scss";

const SingleBlog = (props) => {
  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <div className={style.hero}>
        <Image src={props.frontmatter.image} alt="blog-image" height="500" width="1000" />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{props.frontmatter.title}</h1>
          <p>{props.frontmatter.date}</p>
          <ReactMarkdown>{props.markdownBody}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      return slug;
    });
    return data;
  })(require.context("../../data", true, /\.md$/));
  const paths = blogSlugs.map((blogSlug) => `/blog/${blogSlug}`);
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const data = await import(`../../data/${slug}.md`);
  const singleDocument = matter(data.default);
  return {
    props: {
      frontmatter: singleDocument.data,
      markdownBody: singleDocument.content,
    },
  };
}
