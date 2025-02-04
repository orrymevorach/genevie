import Services from '@/components/ServicesPage/Services/Services';
import Hero from '../shared/Hero/Hero';
import styles from './ServicesPage.module.scss';
import Button from '../shared/Button/Button';
import { useIframeContext } from '../shared/Layout/Layout';

export default function ServicesPage({ entries }) {
  const [banner, services = []] = entries;
  const { setShowIframe } = useIframeContext();
  return (
    <>
      <Hero bannerFields={banner} isCenter isSmall>
        <Button handleClick={() => setShowIframe(true)}>
          Book A Consultation
        </Button>
      </Hero>
      <Services services={services} />
    </>
  );
}
