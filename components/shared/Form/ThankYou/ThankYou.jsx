import styles from './ThankYou.module.scss';

export default function ThankYou() {
  return (
    <div>
      <h2 className={styles.thankYou}>Thank you for your submission!</h2>
      <p className={styles.paragrah}>
        Someone on our team will be in touch shortly.
      </p>
    </div>
  );
}
