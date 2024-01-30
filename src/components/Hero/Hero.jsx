// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Saurav Kumar</h1>
        <p className={styles.description}>
          I am a full-stack developer with 2 years of experience using MERN
          , a BlockChain enthusiast and an AI programmer. Reach out if you would like to learn more!
        </p>
        <a href="mailto:sauravkumar4862@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="It's me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
