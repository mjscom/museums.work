import Image from "next/image";
import Link from "next/link";

import styles from "./quick-pick.module.css";

export default function QuickPick(props) {
  const { img, url, location } = props;

  return (
    <Link href={url} prefetch={false}>
      <div className={`${styles.content} mb-3`}>
        <figure class="mb-3">
          <Image
            src={img}
            alt="quick-pick-image"
            layout="responsive"
            width={720}
            height={720}
            loading="lazy"
          />
        </figure>
        <p className="is-size-5 has-text-weight-semibold">{location}</p>
      </div>
    </Link>
  );
}
