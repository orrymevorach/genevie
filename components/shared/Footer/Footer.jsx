import styles from './Footer.module.scss';
import clsx from 'clsx';

export default function Footer({ hideMarginTop = false }) {
  return (
    <footer
      className={clsx(styles.footer, hideMarginTop && styles.hideMarginTop)}
    >
      <div className={styles.innerContainer}>
        <div className={styles.column}>
          <p className={styles.text}>TBC Admin</p>
        </div>
      </div>
    </footer>
  );
}
