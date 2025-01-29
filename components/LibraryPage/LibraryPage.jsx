import { getMedia } from '@/lib/contentful-utils';
import Hero from '../shared/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import styles from './LibraryPage.module.scss';

export default function LibraryPage({ entries }) {
  const [banner] = entries;
  const image = getMedia(banner.image);
  return (
    <Layout>
      <Hero isCenter imageUrl={image.src}>
        <h2 className={styles.title}>Library</h2>
      </Hero>
    </Layout>
  );
}
