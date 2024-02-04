import HeadingShadow from "../components/generic/heading-shadow";

export default function Four() {
  return (
    <div id="primary" className="mt-6 mb-6 pt-6 pb-6">
      <div className="container is-max-desktop">
        <section className="section">
          <HeadingShadow text="Error" />
          <p className="has-text-weight-bold m-5">
            A 404 error occurred unexpectedly, please try again, or return to
            the home page.
          </p>
        </section>
      </div>
    </div>
  );
}
