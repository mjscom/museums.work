import styles from "./hero.module.css";

export default function HeroTitle({ title, sub }) {
  return (
    <div className={`${styles.hero}`}>
      <div className="container is-max-desktop">
        <section className="section">
          <div className={styles.headingWrapper}>
            <div className={styles.title}>
              <h1
                className={`${styles.text} is-size-2 has-text-weight-bold pb-2 mb-2`}
              >
                {title}
              </h1>
            </div>
            <div className={styles.subText}>
              <span className="is-size-6 has-text-weight-semibold">{sub}</span>
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
