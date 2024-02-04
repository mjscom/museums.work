import Link from "next/link";

import styles from "./legal.module.css";

export default function Data() {
  return (
    <div className={styles.wrapper} id="data">
      <p className="mt-4 mb-4">
        museums.work does not track your visits, utilize third party analytics,
        or advertise in any way.
      </p>
      <p className="mb-4">
        museums.work offers the ability to sign-in or sign-up for an account.
        When signing-in or signing-up for an account, the user agrees to the
        third party authentications terms of service and privacy policies, as
        noted on the authentication modal.
      </p>
      <p className="mb-4">
        When a user creates an account with museums.work, we store their email
        address (as provided) for future login purposes. Users are always in
        control of their data, and can{" "}
        <strong>request an account deletion</strong> from our{" "}
        <Link href="/contact">/contact</Link> page at any time.
      </p>
    </div>
  );
}
