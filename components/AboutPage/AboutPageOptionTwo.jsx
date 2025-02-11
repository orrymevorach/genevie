import Hero from '../shared/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import Wrapper from '../shared/Wrapper/Wrapper';
import styles from './AboutPage.module.scss';
import Education from './Education/Education';
import Instructor from './Instructor/Instructor';
import Publications from './Publications/Publications';
import Societies from './Societies/Societies';
import RichText from '../shared/RichText/RichText';
import Reveal from '../shared/Reveal/Reveal';
import useWindowSize from '@/hooks/useWindowSize';
import lila from 'public/lila.jpg';

export default function AboutPageOptionTwo({ entries }) {
  const [image, aboutRichText, education, instructor, societies, publications] =
    entries;
  const { isMobile } = useWindowSize();
  const Element = !isMobile ? Reveal : 'div';
  console.log('image', lila);
  // const { src, width, height, alt } = getMedia(image.image);
  const bannerFields = {
    image: {
      ...lila,
      fields: {
        file: {
          url: lila.src,
        },
      },
      alt: '',
    },
  };
  return (
    <Layout>
      <Hero bannerFields={bannerFields} shouldAnimate isMedium />
      <Wrapper isSmall>
        <Element className={styles.textContainer}>
          <h1 className={styles.meet}>Meet the Founder</h1>
          <h2 className={styles.lila}>Lila Dayani</h2>
          <p className={styles.qualifications}>MS, MS, LCGC</p>
          <RichText json={aboutRichText.richText} />
        </Element>
        <div className={styles.container}>
          <Element className={styles.left}>
            <Education education={education} />
            <Instructor instructor={instructor} />
            <Societies societies={societies} />
          </Element>
          <Element className={styles.right}>
            <Publications publications={publications} />
          </Element>
        </div>
      </Wrapper>
    </Layout>
  );
}
