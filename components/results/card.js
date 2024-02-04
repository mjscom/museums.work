import Image from "next/image";
import Link from "next/link";

import Partial from "../address/partial";

import styles from "./card.module.css";

export default function Card({ museum, setXid, resetXid }) {
  return (
    <div onMouseEnter={setXid} onMouseLeave={resetXid}>
      <Link href={"/museum/" + museum.xid} prefetch={false}>
        <div className={`${styles.card} card mb-6`}>
          <div className="card-image">
            <Image
              src={museum.preview ? museum.preview.source : "/missing.jpg"}
              alt="card-image"
              layout="responsive"
              width={300}
              height={200}
              quality={100}
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <div className={`${styles.cardDesc} card-content`}>
            <p className={`${styles.title} has-text-weight-bold mb-2`}>
              {museum.name}
            </p>
            <Partial address={museum.address} />
          </div>
        </div>
      </Link>
    </div>
  );
}
