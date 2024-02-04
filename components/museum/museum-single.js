import Reviews from "../review/reviews";

import Desc from "./desc";
import Location from "./location";

import styles from "./museum-single.module.css";

export default function MuseumSingle({ museum, reviews }) {
  return (
    <>
      <div className={styles.imgBg}>
        <div className={styles.imgWrapper}>
          <img
            src={museum.preview ? museum.preview.source : "/missing.jpg"}
            alt="quick-pick-image"
          />
        </div>
      </div>
      <div
        id="primary"
        className={`${styles.container} container is-max-desktop`}
      >
        <section className="section">
          <Desc museum={museum} />
          <Location museum={museum} />
          <Reviews xid={museum.xid} reviews={reviews} />
        </section>
      </div>
    </>
  );
}
