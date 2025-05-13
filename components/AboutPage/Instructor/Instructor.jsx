import useWindowSize from '@/hooks/useWindowSize';
import styles from './Instructor.module.scss';
import Reveal from '@/components/shared/Reveal/Reveal';

export default function Instructor({ instructor }) {
  const { isMobile } = useWindowSize();
  const Element = isMobile ? Reveal : 'p';
  const HeadingElement = isMobile ? Reveal : 'h2';
  return (
    <div className={styles.container}>
      <HeadingElement className={styles.title}>
        clinical lecturer <br /> & instructor
      </HeadingElement>
      {instructor.map(({ school }) => {
        return (
          <Element key={school} className={styles.school}>
            {school}
          </Element>
        );
      })}
    </div>
  );
}
