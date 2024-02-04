import axios from "axios";
import { useForm } from "react-hook-form";

import { useAuth } from "../../util/auth/using-auth";

import styles from "./form.module.css";

export default function Form({ xid }) {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    user.getIdToken(true).then(
      async (IdToken) =>
        await axios
          .post("" + process.env.NEXT_PUBLIC_API_PATH, {
            IdToken,
            data,
            xid: xid,
          })
          .then((res) => console.log(res.data))
    );
  };

  const loggedOut = (
    <div className="columns">
      <div className="column is-2">
        <a href="/ap/sign-in" target="_blank" rel="noopener">
          <a className={styles.submit}>Sign in</a>
        </a>{" "}
      </div>
      <div className="column">
        <span className={`${styles.submitComm} has-text-weight-bold`}>
          to submit ratings and comments.
        </span>
      </div>
    </div>
  );

  const loggedIn = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div name="rating" className={styles.rating}>
        <input
          type="radio"
          id="star5"
          name="rating"
          value="5"
          {...register("rating", { required: true })}
        />
        <label htmlFor="star5" className={styles.star}>
          ★
        </label>

        <input
          type="radio"
          id="star4"
          name="rating"
          value="4"
          {...register("rating", { required: true })}
        />
        <label htmlFor="star4" className={styles.star}>
          ★
        </label>

        <input
          type="radio"
          id="star3"
          name="rating"
          value="3"
          {...register("rating", { required: true })}
        />
        <label htmlFor="star3" className={styles.star}>
          ★
        </label>

        <input
          type="radio"
          id="star2"
          name="rating"
          value="2"
          {...register("rating", { required: true })}
        />
        <label htmlFor="star2" className={styles.star}>
          ★
        </label>

        <input
          type="radio"
          id="star1"
          name="rating"
          value="1"
          {...register("rating", { required: true })}
        />
        <label htmlFor="star1" className={styles.star}>
          ★
        </label>
      </div>
      <br />

      {errors.rating && (
        <div className={styles.ratingErr}>Please select a star rating.</div>
      )}

      <br />

      <div className="field control">
        <textarea
          className="textarea"
          placeholder="Share your thoughts!"
          name="review"
          {...register("review", { required: true, minLength: 10 })}
        />
      </div>

      {errors.review && (
        <div className={styles.commentErr}>
          Please enter a minimum of 10 characters.
        </div>
      )}

      <input
        disabled={isSubmitting}
        type="submit"
        className={`${styles.submit} navbar-item has-text-weight-bold`}
        value="Submit"
      />
    </form>
  );

  return (
    <>
      <div className={`${styles.container} card section mt-4`}>
        {user ? loggedIn : loggedOut}
      </div>
    </>
  );
}
