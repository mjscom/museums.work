import styles from "./reviewcard.module.css";

export default function ReviewCard({ review }) {
  const date = new Date(review.date);

  const humanDate = (date) => {
    const options = { year: "numeric", month: "long" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="card p-5 mt-4">
      <h3 className={`${styles.name} mb-1`}>{review.name}</h3>
      <p className={`${styles.date} mb-4`}>{humanDate(date)}</p>
      <p className={styles.comment}>{review.comment}</p>
    </div>
  );
}
