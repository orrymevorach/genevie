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
        <div className={styles.textContainer}>
          <RichText json={aboutRichText.richText} />
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <Education education={education} />
            <Instructor instructor={instructor} />
            <Societies societies={societies} />
          </div>
          <div className={styles.right}>
            <Publications publications={publications} />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}
