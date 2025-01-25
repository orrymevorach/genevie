import RichText from '@/components/shared/RichText/RichText';
import styles from './Publications.module.scss';

export default function Publications({ publications }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Publications</p>
      {publications.map(({ publicationName, description }) => {
        return (
          <div key={publicationName} className={styles.publication}>
            <p className={styles.name}>{publicationName}</p>
            <RichText json={description} />
          </div>
        );
      })}
    </div>
  );
}
