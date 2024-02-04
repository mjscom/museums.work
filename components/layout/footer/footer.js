import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} footer`}>
      <div className="container is-max-desktop">
        <div className="section pt-6 pb-6">
          <h3 className="has-text-weight-bold mb-5">museums.work</h3>
          <ul>
            <Link href="/about" prefetch={false}>
              <li className={styles.li}>About</li>
            </Link>
            <Link href="/contact" prefetch={false}>
              <li className={styles.li}>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
