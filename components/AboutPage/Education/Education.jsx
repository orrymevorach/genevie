import Reveal from '@/components/shared/Reveal/Reveal';
import styles from './Education.module.scss';
import useWindowSize from '@/hooks/useWindowSize';

export default function Education({ education }) {
  const { isMobile } = useWindowSize();
  const Element = isMobile ? Reveal : 'div';
  return (
    <div className={styles.container}>
      <Element>
        <h2 className={styles.title}>Education and Training</h2>
      </Element>

      {education.map(({ school, degree }) => {
        return (
          <Element key={school}>
            <p className={styles.degree}>{degree}</p>
            <p className={styles.school}>{school}</p>
          </Element>
        );
      })}
    </div>
  );
}
