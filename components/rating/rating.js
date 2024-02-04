import styles from "./rating.module.css";

export default function Rating({ rating }) {
  const rate = parseInt(rating);
  const max = 5;

  const full = new Array(rate).fill(0);
  const empty = new Array(max - rate).fill(0);

  const fullArr = full.map((star) => <span className={styles.star}>★</span>);
  const emptyArr = empty.map((star) => <span className={styles.star}>☆</span>);

  return (
    <>
      {fullArr}
      {emptyArr}
    </>
  );
}
