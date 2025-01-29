import { getMedia } from '@/lib/contentful-utils';
import Hero from '../shared/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import styles from './ProvidersPage.module.scss';
import HeroContent from '../shared/Hero/HeroContent/HeroContent';

export default function ProvidersPage({ entries }) {
  const [banner] = entries;
  const image = getMedia(banner.image);
  return (
    <Layout>
      <Hero imageUrl={image.src} isCenter>
        <HeroContent text={banner.text} />
      </Hero>
    </Layout>
  );
}
