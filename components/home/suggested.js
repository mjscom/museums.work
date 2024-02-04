import QuickPick from "./quick-pick";

export default function Suggested() {
  return (
    <div className="mb-6">
      <div className="container is-max-desktop">
        <section className="section">
          <h1 className="is-size-4 has-text-weight-bold mb-5">Quick Picks</h1>
          <div className="columns">
            <div className="column">
              <QuickPick
                img="/toronto.jpg"
                url="/s/location/CA/Toronto"
                location="Toronto"
              />
            </div>
            <div className="column">
              <QuickPick
                img="/montreal.jpg"
                url="/s/location/CA/Montreal"
                location="Montreal"
              />
            </div>
            <div className="column">
              <QuickPick
                img="/vancouver.jpg"
                url="/s/location/CA/Vancouver"
                location="Vancouver"
              />
            </div>
            <div className="column">
              <QuickPick
                img="/halifax.jpg"
                url="/s/location/CA/Halifax"
                location="Halifax"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
