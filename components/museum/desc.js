import { useState } from "react";

import HeadingShadow from "../generic/heading-shadow";

import styles from "./desc.module.css";

export default function Desc({ museum }) {
  const [hide, setHide] = useState(true);

  const extract = museum.wikipedia_extracts
    ? museum.wikipedia_extracts.text
    : "No description available.";

  return (
    <>
      <HeadingShadow text="About" />
      <div className={`${styles.descWrapper} mb-6 pt-2`}>
        <p className="is-size-6 mb-2">
          <span className={hide ? styles.hide : ""}>{extract}</span>
        </p>
        <p className={styles.show} onClick={() => setHide(!hide)}>
          <span className="is-size-6 has-text-weight-semibold">
            {hide ? "Read more" : "Read less"}{" "}
          </span>
        </p>
      </div>
    </>
  );
}
