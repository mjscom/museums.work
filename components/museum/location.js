import Full from "../address/full";
import LazyLoad from "react-lazy-load";
import HeadingShadow from "../generic/heading-shadow";

import styles from "./location.module.css";

export default function Location({ museum }) {
  return (
    <div className="pt-5">
      <HeadingShadow text="Location" />
      <Full address={museum.address} />

      <div className={`${styles.mapWrapper} mb-6 mt-4`}>
        <a
          target="blank"
          href={process.env.MAP_BASE + museum.name}
        >
          <div className={styles.mapImage}>
            <LazyLoad offset={750}>
              <img src="/map.jpg" alt="map-image" />
            </LazyLoad>
          </div>
          <div className={styles.mapImageText}>Click for directions</div>
        </a>
      </div>
    </div>
  );
}
