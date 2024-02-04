import styles from "./full.module.css";

export default function ({ address }) {
  const number = address.house_number ? address.house_number + " " : "";

  const road = address.road
    ? address.road + ", "
    : address.pedestrian
    ? address.pedestrian + ", "
    : address.footway
    ? address.footway + ", "
    : address.cycleway
    ? address.cycleway + ", "
    : "";

  const city = address.city
    ? address.city + (address.suburb ? " (" + address.suburb + ") " : "")
    : "";

  const state = address.state ? address.state : "";

  const postcode = address.postcode
    ? address.postcode
    : address.neighbourhood
    ? address.neighbourhood
    : "";

  return (
    <div className={`${styles.wrapper} pt-2`}>
      <div className="has-text-weight-bold">{number + road + city}</div>
      <div>
        {state}
        {", "}
        {address.country_code ? (
          <span className={styles.ccode}>{address.country_code}</span>
        ) : (
          ""
        )}
      </div>
      <div>{postcode}</div>
    </div>
  );
}
