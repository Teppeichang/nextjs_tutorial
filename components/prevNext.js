import Link from "next/link";
import * as style from "../styles/singleBlog.module.scss";

const PrevNext = ({prev, next}) => {
  return (
    <div className={style.pnWrapper}>
      {0 < prev.length && (
        <Link href={`/blog/${prev[0].slug}`}>
          <a className={style.linkCard}>
            <img src="/images/arrow-left.svg" alt="arrow-left" />
            <h3> {prev[0].frontmatter.title}</h3>
          </a>
        </Link>
      )}
      {0 < next.length && (
        <Link href={`/blog/${next[0].slug}`}>
          <a className={style.linkCard}>
            <h3>{next[0].frontmatter.title}</h3>
            <img src="/images/arrow-right.svg" alt="arrow-right" className="arrow-right" />
          </a>
        </Link>
      )}
    </div>
  );
};

export default PrevNext;
