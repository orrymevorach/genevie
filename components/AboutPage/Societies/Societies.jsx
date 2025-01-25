import styles from './Societies.module.scss';

export default function Societies({ societies }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>professional socieites</p>
      {societies.map(({ profesionalSociety }) => {
        return (
          <p key={profesionalSociety} className={styles.society}>
            {profesionalSociety}
          </p>
        );
      })}
    </div>
  );
}
