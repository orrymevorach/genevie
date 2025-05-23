import Reveal from '@/components/shared/Reveal/Reveal';
import styles from './ProfesionalBackground.module.scss';
import useWindowSize from '@/hooks/useWindowSize';

export default function ProfesionalBackground({ professionalBackground }) {
  const { isMobile } = useWindowSize();
  const Element = isMobile ? Reveal : 'div';
  return (
    <div className={styles.container}>
      <Element>
        <h2 className={styles.title}>Professional Background</h2>
      </Element>

      {professionalBackground.map(({ company, jobTitle }) => {
        return (
          <Element key={company}>
            <p className={styles.company}>{company}</p>
            <p className={styles.job}>{jobTitle}</p>
          </Element>
        );
      })}
    </div>
  );
}
