import styles from './HomePage.module.scss';
import About from './About/About';
import Hero from '../shared/Hero/Hero';
import Information from './Information/Information';
import Tiles from './Tiles/Tiles';
import Button from '../shared/Button/Button';
import { ROUTES } from '@/utils/constants';
import { useIframeContext } from '../shared/Layout/Layout';
import Reveal from '../shared/Reveal/Reveal';
import Testimonials from './Testimonials/Testimonials';

export default function HomePage({ entries }) {
  const [banner, richTextInformation, richTextAbout, tiles, testimonials] =
    entries;
  const { setShowIframe } = useIframeContext();
  return (
    <>
      <Hero
        classNames={styles.hero}
        isCenter={false}
        text={banner.text}
        shouldAnimate
        bannerFields={banner}
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
      {testimonials && testimonials.length > 0 ? (
        <Testimonials testimonials={testimonials} />
      ) : (
        ''
      )}
    </>
  );
}
