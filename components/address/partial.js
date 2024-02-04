export default function Partial({ address }) {
  return (
    <p>
      {address.city || address.state},{" "}
      <span className="is-uppercase">{address.country_code}</span>
    </p>
  );
}
