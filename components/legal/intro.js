import styles from "./legal.module.css";

export default function Intro() {
  return (
    <div className={styles.wrapper} id="terms">
      <p className="mt-4 mb-4">
        museums.work acts to aggregate museums and historical sites, while
        providing the ability to leave reviews for future users.
      </p>
      <p className="mb-4">
        While currently only North American museums are listed, international
        updates will be taking place very shortly. This will also include
        further user abilities and page moderation.
      </p>
    </div>
  );
}
