import Data from "../components/legal/data";
import Intro from "../components/legal/intro";
import Terms from "../components/legal/terms";
import HeadingShadow from "../components/generic/heading-shadow";
import HeroTitle from "../components/location/hero";

export default function About() {
  return (
    <>
      <HeroTitle title="About" />
      <div id="primary" className="mt-6 mb-6 pt-6 pb-6">
        <div className="container is-max-desktop">
          <section className="section">
            <HeadingShadow text="Intro" />
            <Intro />
          </section>
          <section className="section">
            <HeadingShadow text="Terms" />
            <Terms />
          </section>
          <section className="section">
            <HeadingShadow text="Privacy Policy" />
            <Data />
          </section>
        </div>
      </div>
    </>
  );
}
