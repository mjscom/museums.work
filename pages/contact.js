import ContactForm from "../components/legal/contact-form";
import HeadingShadow from "../components/generic/heading-shadow";
import HeroTitle from "../components/location/hero";

export default function Contact() {
  return (
    <>
      <HeroTitle title="Contact" />
      <div id="primary" className="mt-6 mb-6 pt-6 pb-6">
        <div className="container is-max-desktop">
          <section className="section">
            <HeadingShadow text="Contact Us" />
            <ContactForm />
          </section>
        </div>
      </div>
    </>
  );
}
