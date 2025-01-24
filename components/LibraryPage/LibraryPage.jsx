import Hero from '../HomePage/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import styles from './LibraryPage.module.scss';

export default function LibraryPage() {
  return (
    <Layout>
      <Hero isCenter imageUrl="./library-hero.png">
        <h2 className={styles.title}>Library</h2>
      </Hero>
    </Layout>
  );
}
