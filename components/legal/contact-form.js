import styles from "./contact-form.module.css";

export default function Contact() {
  return (
    <>
      <form
        name="contact"
        method="POST"
        action={process.env.FORM_URL}
      >
        <p className="mt-5 mb-5">
          <label className="label pt-3">
            Your Name: <input className="input mt-3" type="text" name="name" />
          </label>
        </p>
        <p className="mt-5 mb-5">
          <label className="label pt-3">
            Your Email:{" "}
            <input className="input mt-3" type="email" name="email" />
          </label>
        </p>
        <p className="mt-5 mb-5">
          <label className="label pt-3">
            Message:{" "}
            <textarea className="textarea mt-3" name="message"></textarea>
          </label>
        </p>
        <p>
          <button className={styles.button} type="submit">
            Send
          </button>
        </p>
      </form>
    </>
  );
}
