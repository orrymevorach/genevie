import styles from './LibraryItems.module.scss';
import Column from './Column/Column';
import Reveal from '@/components/shared/Reveal/Reveal';

export default function LibraryItems({ items }) {
  const { articles, podcasts, books } = items;
  return (
    <div className={styles.container}>
      <Reveal threshold={0.1}>
        <h2 className={styles.pageHeading}>Library</h2>
      </Reveal>
      <div className={styles.columns}>
        <Column title="Articles" items={articles} buttonText="Read Now" />
        <Column title="Podcasts" items={podcasts} buttonText="Listen" />
        <Column title="Books" items={books} buttonText="Read Now" />
      </div>
    </div>
  );
}
