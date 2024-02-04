import styles from "./heading-shadow.module.css";

export default function HeadingShadow({ text }) {
  return (
    <h2 className="is-size-5 has-text-weight-bold mb-3 is-capitalized">
      <span className={styles.heading}>{text}</span>
    </h2>
  );
}
