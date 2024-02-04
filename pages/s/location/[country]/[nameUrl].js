import { connectToDatabase } from "../../../../util/mongodb";

import Columns from "../../../../components/results/columns";
import HeroTitle from "../../../../components/location/hero";

export default function Location({ location, museums }) {
  museums.sort((a, b) => ("" + a.image).localeCompare(b.image));

  return (
    <>
      <HeroTitle title={location.name} sub={museums.length + " results"} />
      <Columns location={location} museums={museums} />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { nameUrl } = ctx.query;
  const { db } = await connectToDatabase();

  const location = await db
    .collection("locations")
    .find({ nameUrl: nameUrl })
    .toArray();

  let museumArr = [];

  for (let i = 0; i < location[0].museums.length; i++) {
    let museumData = await db
      .collection("museums")
      .find({ xid: location[0].museums[i].properties.xid })
      .toArray();

    museumArr.push(museumData[0]);
  }

  return {
    props: {
      location: JSON.parse(JSON.stringify(location[0])),
      museums: JSON.parse(JSON.stringify(museumArr)),
    },
  };
}
