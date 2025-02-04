import useWindowSize from '@/hooks/useWindowSize';
import styles from './Societies.module.scss';
import Reveal from '@/components/shared/Reveal/Reveal';

export default function Societies({ societies }) {
  const { isMobile } = useWindowSize();
  const Element = isMobile ? Reveal : 'p';
  return (
    <div className={styles.container}>
      <Element className={styles.title}>professional socieites</Element>
      {societies.map(({ profesionalSociety }) => {
        return (
          <Element key={profesionalSociety} className={styles.society}>
            {profesionalSociety}
          </Element>
        );
      })}
    </div>
  );
}
