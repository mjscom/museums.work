import Link from "next/link";

import Burger from "./burger";
import SignIn from "./sign-in";

import styles from "./header.module.css";

export default function Header() {
  return (
    <navbar>
      <div className={`${styles.container} level is-mobile`}>
        <div className="level-item has-text-left">
          <Burger />
        </div>
        <div className={`${styles.center} level-item has-text-centered`}>
          <Link href="/" prefetch={false}>
            <div className={styles.logo}>
              <span className={styles.title}>museums.work</span>
            </div>
          </Link>
        </div>
        <div className="level-item has-text-right">
          <SignIn />
        </div>
      </div>
    </navbar>
  );
}
