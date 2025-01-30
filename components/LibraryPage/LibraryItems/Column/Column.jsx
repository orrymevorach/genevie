import Link from 'next/link';
import styles from './Column.module.scss';

export default function Column({ title, items, buttonText }) {
  return (
    <div>
      <p className={styles.columnHeading}>{title}</p>
      <ul>
        {items.map(item => {
          return (
            <li key={item.title} className={styles.item}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.author}>{item.author}</p>
              <Link href={item.link} className={styles.link}>
                {buttonText}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
