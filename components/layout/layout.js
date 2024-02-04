import Header from "./header/header";
import Footer from "./footer/footer";

import styles from "../../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </>
  );
}
