import { AuthProvider } from "../util/auth/using-auth";
import Layout from "../components/layout/layout";

import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
