// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sauravkumar4862@gmail.com">sauravkumar4862@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/saurav-kumar-92bb521a8/">LinkedIn Profile</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/serz4862">Github Profile</a>
        </li>
        {/* <li className={styles.link}>
          <img src={getImageUrl("contact/twitter.png")} alt="Twitter icon" />
          <a href="https://twitter.com/SauravSerz">Twitter Profile</a>
        </li> */}
      </ul>
    </footer>
  );
};
