import { getMedia } from '@/lib/contentful-utils';
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

export default function AboutPage({ entries }) {
  const [
    banner,
    aboutRichText,
    education,
    instructor,
    societies,
    publications,
  ] = entries;
  const bannerImage = getMedia(banner.image);
  return (
    <Layout>
      <Hero imageUrl={bannerImage.src} />
      <Wrapper isSmall>
        <Reveal>
          <div className={styles.textContainer}>
            <RichText json={aboutRichText.richText} />
          </div>
        </Reveal>
        <div className={styles.container}>
          <div className={styles.left}>
            <Reveal>
              <Education education={education} />
              <Instructor instructor={instructor} />
              <Societies societies={societies} />
            </Reveal>
          </div>
          <div className={styles.right}>
            <Reveal>
              <Publications publications={publications} />
            </Reveal>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}
