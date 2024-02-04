import { connectToDatabase } from "../../../util/mongodb";
import { firebaseAdmin } from "../../../util/auth/firebase-admin";

export default async function handler(req, res) {
  if (
    req.method === "POST" &&
    req.body.IdToken &&
    req.body.data &&
    req.body.xid
  ) {
    await firebaseAdmin
      .auth()
      .verifyIdToken(req.body.IdToken)
      .then(async (token) => {
        const { db } = await connectToDatabase();

        // Remove full last name.
        const nameSplit = token.name.split(" ");
        const name = nameSplit[0] + " " + nameSplit[1][0] + ".";

        await db.collection("reviews").insertOne({
          xid: req.body.xid,
          uid: token.user_id,
          name: name,
          comment: req.body.data.review,
          rating: req.body.data.rating,
          date: new Date(),
        });
      })
      .catch((err) => res.json("Error code: C-100."));

    res.json("Success.");
  } else {
    res.json("Error code: D-100.");
  }
}
