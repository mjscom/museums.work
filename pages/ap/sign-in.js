import nookies from "nookies";

import Access from "../../components/access/access";
import { firebaseAdmin } from "../../util/auth/firebase-admin";

export default function SignIn() {
  return (
    <div className="mt-6">
      <div className="container is-max-desktop">
        <section className="section">
          <Access />
        </section>
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    const { email } = token;

    if (email) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
      };
    }
  } catch (err) {
    return { props: {} };
  }
};
