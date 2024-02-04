import styles from "./legal.module.css";

export default function Terms() {
  return (
    <div className={styles.wrapper} id="terms">
      <p className="mt-4 mb-4">
        All the information on this website is published in good faith and for
        general information purposes only.
      </p>
      <p className="mb-4">
        museums.work does not make any warranties about the completeness,
        reliability and accuracy of this information. Any action you take upon
        the information you find on this website (museums.work), is strictly at
        your own risk. We will not be liable for any losses and/or damages in
        connection with the use of our website.
      </p>
      <p className="mb-4">
        From our website, you can visit other websites by following hyperlinks
        to such external sites. While we strive to provide only quality links to
        useful and ethical websites, we have no control over the content and
        nature of these sites. These links to other websites do not imply a
        recommendation for all the content found on these sites. Site owners and
        content may change without notice and may occur before we have the
        opportunity to remove a link which may have gone ‘bad'.
      </p>
      <p className="mb-4">
        Please be also aware that when you leave our website, other sites may
        have different privacy policies and terms which are beyond our control.
        Please be sure to check the Privacy Policies of these sites as well as
        their "Terms of Service" before engaging in any business.
      </p>
    </div>
  );
}
