import Head from "next/head";

import HeroSearch from "../components/home/hero-search";
import Suggested from "../components/home/suggested";
import Tagline from "../components/home/tagline";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>museums.work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.sticky}>
        <HeroSearch />
        <Tagline />
        <Suggested />
      </main>
    </>
  );
}
