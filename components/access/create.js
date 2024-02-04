import { useState } from "react";

import styles from "./create.module.css";

export default function Create() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p>
        Don't have an account?{" "}
        <span className={styles.click} onClick={() => setOpen(!open)}>
          Click to learn more.
        </span>
      </p>

      <div className={`${styles.learn} ${open ? styles.open : ""}`}>
        You can create an account anytime by selecting one of the above login
        options. On future visits, simply select the same method to login.
      </div>
    </>
  );
}
