import Services from '@/components/ServicesPage/Services/Services';
import Hero from '../shared/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import styles from './ServicesPage.module.scss';
import { getMedia } from '@/lib/contentful-utils';
import HeroContent from '../shared/Hero/HeroContent/HeroContent';
import Button from '../shared/Button/Button';

export default function ServicesPage({ entries }) {
  const [banner, services = []] = entries;
  const image = getMedia(banner.image);
  return (
    <Layout>
      <Hero imageUrl={image.src} isCenter>
        <HeroContent text={banner.text}>
          <Button isSecondary>Book A Consultation</Button>
        </HeroContent>
      </Hero>
      <Services services={services} />
    </Layout>
  );
}
