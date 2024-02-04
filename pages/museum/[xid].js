import { connectToDatabase } from "../../util/mongodb";

import HeroTitle from "../../components/museum/hero";
import MuseumSingle from "../../components/museum/museum-single";

export default function Museum({ museum, reviews }) {
  return (
    <>
      <HeroTitle title={museum.name} rating={museum.rate} />
      <MuseumSingle museum={museum} reviews={reviews} />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { xid } = ctx.query;
  const { db } = await connectToDatabase();

  const museum = await db.collection("museums").find({ xid: xid }).toArray();
  const reviews = await db.collection("reviews").find({ xid: xid }).toArray();

  return {
    props: {
      museum: JSON.parse(JSON.stringify(museum[0])),
      reviews: JSON.parse(JSON.stringify(reviews)),
    },
  };
}
