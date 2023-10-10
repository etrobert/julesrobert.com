import { ReactNode } from 'react';
import styles from './JustifiedText.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Hack to display a paragraph with the words spaced out.
 *
 * Source: https://stackoverflow.com/a/22950810
 */
const JustifiedText = ({ children, className }: Props) => (
  <p className={[styles.paragraph, className].join(' ')}>
    {children}
    <span className={styles.span}> </span>
  </p>
);

export default JustifiedText;
