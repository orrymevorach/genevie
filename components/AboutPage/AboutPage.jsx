import Hero from '../HomePage/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import Wrapper from '../shared/Wrapper/Wrapper';
import styles from './AboutPage.module.scss';
import Education from './Education/Education';
import Instructor from './Instructor/Instructor';
import Publications from './Publications/Publications';
import Societies from './Societies/Societies';

export default function AboutPage({
  education,
  instructor,
  societies,
  publications,
}) {
  return (
    <Layout>
      <Hero imageUrl="./about-hero.png" />
      <Wrapper isSmall>
        <div className={styles.textContainer}>
          <p className={styles.title}>
            Lila Dayani <span>MS, MS, LCGC</span>
          </p>
          <p className={styles.about}>
            As a board-certified reproductive genetic counselor with over a
            decade of experience at UCLA and a leading L.A. based maternal-fetal
            medicine practice, I have collaborated with top experts in the field
            of reproductive medicine, counseling thousands of patients before
            and during pregnancy. From infertility support and evaluating
            complex family histories to diagnosing genetic conditions and
            addressing abnormal test results, I guide patients through their
            most challenging concerns. 
          </p>
          <p className={styles.about}>
            My patients, from diverse backgrounds—including scientists, CEOs,
            and celebrities—consistently asked, “Why wasn’t this resource
            available sooner?” Their frustration was valid, revealing a gap in
            reproductive care. GENEVIE was created to redefine the routine
            standard and ensure access to information at a pivotal window. 
          </p>
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
