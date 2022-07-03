import styles from "./BusinessCard.module.css";

const BusinessCard = () => (
  <div>
    <h1>Étienne Robert</h1>
    <div className={styles.links}>
      <a
        className={styles["github-link"]}
        target="_blank"
        href="https://github.com/etrobert"
      ></a>
      <a
        className={styles["linkedin-link"]}
        target="_blank"
        href="https://www.linkedin.com/in/etienne-robert-0196b6140/"
      ></a>
      <a
        className={styles["instagram-link"]}
        target="_blank"
        href="https://www.instagram.com/etrobert_"
      ></a>
    </div>
  </div>
);

export default BusinessCard;
