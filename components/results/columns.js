import useMeasure from "react-use-measure";
import { useState } from "react";
import dynamic from "next/dynamic";

import Card from "../results/card";

import styles from "./columns.module.css";

export default function Columns({ location, museums }) {
  const [width, bounds] = useMeasure();
  const [xid, setXid] = useState("");

  console.log(bounds.width);

  const cards = museums.map((museum) => (
    <Card
      museum={museum}
      setXid={() => setXid(museum.xid)}
      resetXid={() => setXid("")}
    />
  ));

  // Split our sorted array so highest rated remains on top
  const left = cards.filter((element, index) => {
    return index % 2 === 0;
  });
  const right = cards.filter((element, index) => {
    return index % 2 !== 0;
  });

  // Dynamic loading for Leaflet: https://stackoverflow.com/a/64634759
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../map/map"), {
        loading: () => <p>Loading map.</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div id="primary" className="columns is-gapless" ref={width}>
      <div className="column is-8">
        <div className={styles.resultsWrapper}>
          <section className="section">
            <div className={`${styles.gap} columns is-variable is-7`}>
              <div className="column">{left}</div>
              <div className="column">{right}</div>
            </div>
          </section>
        </div>
      </div>

      <div className={`column is-4`}>
        <div className={styles.mapWrapper}>
          <Map
            location={location}
            museums={museums}
            xid={xid}
            mobile={bounds.width < 769 && bounds.width !== 0 ? true : false}
          />
        </div>
      </div>
    </div>
  );
}
