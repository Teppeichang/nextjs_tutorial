import Link from "next/link";
import Image from "next/image";
import * as style from "../styles/common.module.scss";

const Header = () => {
  return (
    <header className={style.headerWrapper}>
      <div className={style.container}>
        <div className={style.flexContainer}>
          <Link href="/">
              <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          </Link>
          <ul>
            <li>
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
