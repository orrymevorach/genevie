import Services from '@/components/ServicesPage/Services/Services';
import Hero from '../shared/Hero/Hero';
import styles from './ServicesPage.module.scss';
import { getMedia } from '@/lib/contentful-utils';
import Button from '../shared/Button/Button';
import { useIframeContext } from '../shared/Layout/Layout';

export default function ServicesPage({ entries }) {
  const [banner, services = []] = entries;
  const image = getMedia(banner.image);
  const { setShowIframe } = useIframeContext();
  return (
    <>
      <Hero imageUrl={image.src} isCenter isSmall text={banner.text}>
        <Button handleClick={() => setShowIframe(true)}>
          Book A Consultation
        </Button>
      </Hero>
      <Services services={services} />
    </>
  );
}
