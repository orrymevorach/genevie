import { getMedia } from '@/lib/contentful-utils';
import Hero from '../shared/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import styles from './LibraryPage.module.scss';
import LibraryItems from './LibraryItems/LibraryItems';
import Wrapper from '../shared/Wrapper/Wrapper';

export default function LibraryPage({ entries }) {
  const [banner, libraryItems] = entries;
  const image = getMedia(banner.image);
  return (
    <Layout>
      <Hero isCenter imageUrl={image.src}>
        <h2 className={styles.title}>Library</h2>
      </Hero>
      <Wrapper>
        <LibraryItems items={libraryItems} />
      </Wrapper>
    </Layout>
  );
}
