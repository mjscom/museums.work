import Search from "../search/search";

import styles from "./hero-search.module.css";

export default function HeroSearch() {
  return (
    <div className={`${styles.hero} mb-6 pt-6 pb-6`}>
      <div className="container is-max-desktop">
        <section className={`${styles.inner} section`}>
          <Search />
          <h1 className="is-size-1 is-size-3-mobile has-text-weight-bold pt-2 mb-4">
            North American museums and heritage
          </h1>
          <h2 className="is-size-3 is-size-4-mobile mb-3">find your next visit.</h2>
        </section>
      </div>
    </div>
  );
}
