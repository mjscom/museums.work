import Form from "./form";
import HeadingShadow from "../generic/heading-shadow";
import ReviewCard from "./reviewcard";

export default function Reviews({ xid, reviews }) {
  const reviewArr = reviews.map((review) => <ReviewCard review={review} />);

  const half = Math.ceil(reviewArr.length / 2);
  const reviewColOne = reviewArr.splice(0, half);
  const reviewColTwo = reviewArr.splice(-half);

  return (
    <div className="pt-5">
      <HeadingShadow text="Reviews" />
      {reviews.length ? (
        <div className="columns is-variable is-5">
          <div className="column">{reviewColOne}</div>
          <div className="column">{reviewColTwo}</div>
        </div>
      ) : (
        <p className="mt-6 mb-6 has-text-centered is-italic has-text-weight-bold">
          Be the first to leave a review!
        </p>
      )}
      <Form xid={xid} />
    </div>
  );
}
