import styles from './HomePage.module.scss';
import { getMedia } from '@/lib/contentful-utils';
import About from './About/About';
import Hero from '../shared/Hero/Hero';
import Information from './Information/Information';
import Tiles from './Tiles/Tiles';
import Button from '../shared/Button/Button';
import { ROUTES } from '@/utils/constants';
import { useIframeContext } from '../shared/Layout/Layout';
import Reveal from '../shared/Reveal/Reveal';

export default function HomePage({ entries }) {
  const [banner, richTextInformation, richTextAbout, tiles] = entries;
  const imageFields = getMedia(banner.image);
  const { setShowIframe } = useIframeContext();
  return (
    <>
      <Hero
        imageUrl={imageFields.src}
        classNames={styles.hero}
        isCenter={false}
        text={banner.text}
        shouldAnimate
      >
        <Button
          classNames={styles.bookButton}
          handleClick={() => setShowIframe(true)}
        >
          Book A Consultation
        </Button>
        <Button isSecondary href={ROUTES.SERVICES}>
          Services
        </Button>
      </Hero>
      <Reveal>
        <Information richText={richTextInformation} />
      </Reveal>
      <Reveal>
        <Tiles data={tiles} />
      </Reveal>
      <About richText={richTextAbout} />
    </>
  );
}
