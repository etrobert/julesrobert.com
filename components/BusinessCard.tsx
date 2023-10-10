import Link from 'next/link';
import Image from 'next/image';
import styles from './BusinessCard.module.scss';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import InstagramIcon from './icons/InstagramIcon';

const BusinessCard = () => (
  <div className={styles.container}>
    <Image
      src="/portrait.jpeg"
      className={styles.portrait}
      width={1365 / 5}
      height={2048 / 5}
      alt="Portrait of the author"
    />
    <div>
      <h1 className={styles.heading}>Étienne Robert</h1>
      <div className={styles.links}>
        <Link target="_blank" href="https://github.com/etrobert">
          <GithubIcon />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/etienne-robert-dev/"
        >
          <LinkedinIcon />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/etrobert_">
          <InstagramIcon />
        </Link>
      </div>
    </div>
  </div>
);

export default BusinessCard;
