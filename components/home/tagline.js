import styles from "./tagline.module.css";

export default function Tagline() {
  return (
    <div className="pt-6 mb-6">
      <section className="section">
        <div className={styles.inner}>
          <h2 className="has-text-centered is-size-3 has-text-weight-bold mb-4">
            Let us help
          </h2>
          <p className="has-text-centered is-size-5 is-size-6-mobile mb-3">
            museums.work provides a collection of peer-sourced destinations,
            from local galleries to provincial hubs.
          </p>
        </div>
      </section>
    </div>
  );
}
