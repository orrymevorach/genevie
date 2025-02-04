import useWindowSize from '@/hooks/useWindowSize';
import styles from './Instructor.module.scss';
import Reveal from '@/components/shared/Reveal/Reveal';

export default function Instructor({ instructor }) {
  const { isMobile } = useWindowSize();
  const Element = isMobile ? Reveal : 'p';
  return (
    <div className={styles.container}>
      <Element className={styles.title}>
        clinical lecturer <br /> & instructor
      </Element>
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
