import Link from 'next/link';
import styles from './Column.module.scss';
import Button from '@/components/shared/Button/Button';

export default function Column({ title, items, buttonText }) {
  return (
    <div className={styles.column}>
      <p className={styles.columnHeading}>{title}</p>
      <ul>
        {items.map(item => {
          return (
            <li key={item.title} className={styles.item}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.author}>{item.author}</p>
              <Button href={item.link} className={styles.link} isLinkStyle>
                {buttonText}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
