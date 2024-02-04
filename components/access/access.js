import Create from "./create";
import FirebaseUI from "./firebaseUI";

import styles from "./access.module.css";

export default function Access() {
  return (
    <div className="columns is-mobile is-centered mt-3 mb-6">
      <div className={styles.wrapper}>
        <h1 className="is-size-2 has-text-weight-bold mb-4">Welcome back.</h1>
        <h2 className="is-size-5 has-text-weight-normal mb-6">
          Please select your preferred login method.
        </h2>
        <FirebaseUI />
        <div className={styles.create}>
          <Create />
        </div>
      </div>
    </div>
  );
}
