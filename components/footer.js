import Link from "next/link";
import * as style from "../styles/common.module.scss";

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.insideContainer}>
        <a href="https://www.google.com/">
          <img src="/images/github.svg" alt="logo" />
        </a>
        <a href="https://www.google.com/">
          <img src="/images/linkedin.svg" alt="logo" />
        </a>
        <a href="https://www.google.com/">
          <img src="/images/twitter.svg" alt="logo" />
        </a>
        <a href="https://www.google.com/">
          <img src="/images/facebook.svg" alt="logo" />
        </a>
        <hr />
        <Link href="/blog">
          Blog
        </Link>
        <Link href="/contact">
          Contact
        </Link>
        <p>©{new Date().getFullYear()} Abe Hiroki</p>
      </div>
    </footer>
  );
};

export default Footer;
