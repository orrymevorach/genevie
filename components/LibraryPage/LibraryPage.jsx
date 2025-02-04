import { getMedia } from '@/lib/contentful-utils';
import Hero from '../shared/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import styles from './LibraryPage.module.scss';
import LibraryItems from './LibraryItems/LibraryItems';
import Wrapper from '../shared/Wrapper/Wrapper';
import useWindowSize from '@/hooks/useWindowSize';

export default function LibraryPage({ entries }) {
  const [banner, libraryItems] = entries;
  const image = getMedia(banner.image);
  const { isMobile } = useWindowSize();
  return (
    <Layout>
      <Hero
        isCenter
        imageUrl={image.src}
        isSmall={!isMobile}
        text={banner.text}
      />
      <Wrapper>
        <LibraryItems items={libraryItems} />
      </Wrapper>
    </Layout>
  );
}
