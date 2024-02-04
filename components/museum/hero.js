import Rating from "../rating/rating";

import styles from "./hero.module.css";

export default function HeroTitle({ title, rating }) {
  return (
    <div className={`${styles.hero}`}>
      <div className="container is-max-desktop">
        <section className="section">
          <div className={styles.headingWrapper}>
            <div className={styles.title}>
              <h1
                className={`${styles.text} is-size-2 has-text-weight-bold mb-2`}
              >
                {title}
              </h1>
            </div>
            <div className={styles.subText}>
              <Rating rating={rating} />
              <a href="#primary" className={styles.icon}>
                <i className={styles.ggChevronDouble} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
