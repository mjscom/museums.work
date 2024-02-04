import { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";

import styles from "./burger.module.css";

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`${styles.wrapper} ${open ? styles.wrapperOpened : ""}`}
      />
      <div className={styles.burger}>
        <Hamburger
          toggled={open}
          toggle={setOpen}
          size={20}
          distance="md"
          color={open ? "white" : "#202020"}
        />
      </div>
      <div className={`${styles.popout} ${open ? styles.opened : ""}`}>
        <ul>
          <Link href="/about" prefetch={false}>
            <li className={styles.li}>
              <span className="is-size-5 has-text-weight-semibold">About</span>
            </li>
          </Link>
          <Link href="/contact" prefetch={false}>
            <li className={styles.li}>
              <span className="is-size-5 has-text-weight-semibold">
                Contact
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
