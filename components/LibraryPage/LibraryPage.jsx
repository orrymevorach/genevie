import { getMedia } from '@/lib/contentful-utils';
import Hero from '../shared/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import styles from './LibraryPage.module.scss';
import LibraryItems from './LibraryItems/LibraryItems';
import Wrapper from '../shared/Wrapper/Wrapper';
import HeroContent from '../shared/Hero/HeroContent/HeroContent';

export default function LibraryPage({ entries }) {
  const [banner, libraryItems] = entries;
  const image = getMedia(banner.image);
  return (
    <Layout>
      <Hero isCenter imageUrl={image.src} isSmall>
        <HeroContent text={banner.text} isCenter />
      </Hero>
      <Wrapper>
        <LibraryItems items={libraryItems} />
      </Wrapper>
    </Layout>
  );
}
