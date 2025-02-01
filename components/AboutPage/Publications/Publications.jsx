import RichText from '@/components/shared/RichText/RichText';
import styles from './Publications.module.scss';
import Button from '@/components/shared/Button/Button';

export default function Publications({ publications }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Publications</p>
      {publications.map(({ publicationName, description, link }) => {
        return (
          <div key={publicationName} className={styles.publication}>
            <p className={styles.name}>{publicationName}</p>
            <RichText json={description} />
            {link && (
              <Button isLinkStyle href={link} classNames={styles.button}>
                Read More
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
}
