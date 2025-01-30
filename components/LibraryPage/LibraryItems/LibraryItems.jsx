import styles from './LibraryItems.module.scss';
import Column from './Column/Column';

export default function LibraryItems({ items }) {
  const { articles, podcasts, books } = items;
  return (
    <div className={styles.container}>
      <h2 className={styles.pageHeading}>
        A curated collection of articles,
        <br /> videos, podcasts and books
      </h2>
      <div className={styles.columns}>
        <Column title="Articles" items={articles} buttonText="Read Now" />
        <Column title="Podcasts" items={podcasts} buttonText="Listen" />
        <Column title="Books" items={books} buttonText="Read Now" />
      </div>
    </div>
  );
}
