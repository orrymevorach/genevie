import styles from './Education.module.scss';

export default function Education({ education }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Education and Training</p>
      {education.map(({ school, degree }) => {
        return (
          <div key={school}>
            <p className={styles.degree}>{degree}</p>
            <p className={styles.school}>{school}</p>
          </div>
        );
      })}
    </div>
  );
}
