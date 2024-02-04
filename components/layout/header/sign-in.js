import Link from "next/link";
import nookies from "nookies";

import { firebaseClient } from "../../../util/auth/firebase-client";
import { useAuth } from "../../../util/auth/using-auth";

import styles from "./sign-in.module.css";

export default function SignIn() {
  const { user } = useAuth();

  const logOut = () => {
    firebaseClient.auth().signOut();
    nookies.destroy(null, "token", { path: "/" });
  };

  const signIn = (
    <Link href="/ap/sign-in">
      <div className={styles.wrapper}>
        <a className={styles.button}>Sign In</a>
      </div>
    </Link>
  );

  const signOut = (
    <div className={styles.wrapper} onClick={() => logOut()}>
      <a className={styles.button}>Sign Out</a>
    </div>
  );

  return <div className="">{user ? signOut : signIn}</div>;
}
