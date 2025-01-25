import styles from './Instructor.module.scss';

export default function Instructor({ instructor }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        clinical lecturer <br /> & instructor
      </p>
      {instructor.map(({ school }) => {
        return (
          <p key={school} className={styles.school}>
            {school}
          </p>
        );
      })}
    </div>
  );
}
