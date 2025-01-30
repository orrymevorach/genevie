import styles from './HomePage.module.scss';
import { getMedia } from '@/lib/contentful-utils';
import Layout from '../shared/Layout/Layout';
import About from './About/About';
import Hero from '../shared/Hero/Hero';
import HeroContent from '../shared/Hero/HeroContent/HeroContent';
import Information from './Information/Information';
import Tiles from './Tiles/Tiles';
import Button from '../shared/Button/Button';
import { ROUTES } from '@/utils/constants';

export default function HomePage({ entries }) {
  const [banner, tiles] = entries;
  const imageFields = getMedia(banner.image);
  return (
    <Layout>
      <Hero imageUrl={imageFields.src}>
        <HeroContent text={banner.text} isCenter={false}>
          <Button classNames={styles.bookButton}>Book A Consultation</Button>
          <Button isSecondary href={ROUTES.SERVICES}>
            Services
          </Button>
        </HeroContent>
      </Hero>
      <Information />
      <Tiles data={tiles} />
      <About />
    </Layout>
  );
}
