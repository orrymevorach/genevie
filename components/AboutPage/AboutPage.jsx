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

export default function AboutPage({ entries }) {
  const [
    banner,
    aboutRichText,
    education,
    instructor,
    societies,
    publications,
  ] = entries;
  const { isMobile } = useWindowSize();
  const Element = !isMobile ? Reveal : 'div';
  return (
    <Layout>
      <Hero bannerFields={banner} shouldAnimate />
      <Wrapper isSmall>
        <Element className={styles.textContainer}>
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
