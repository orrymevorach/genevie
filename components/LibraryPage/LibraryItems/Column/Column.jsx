import Link from 'next/link';
import styles from './Column.module.scss';
import Button from '@/components/shared/Button/Button';
import useWindowSize from '@/hooks/useWindowSize';
import Reveal from '@/components/shared/Reveal/Reveal';

export default function Column({ title, items, buttonText }) {
  const { isMobile } = useWindowSize();
  const Element = isMobile ? Reveal : 'div';
  const ElementTitle = isMobile ? Reveal : 'p';
  return (
    <div className={styles.column}>
      <ElementTitle className={styles.columnHeading}>{title}</ElementTitle>
      <ul>
        {items.map(item => {
          return (
            <Element key={item.title}>
              <li className={styles.item}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.author}>{item.author}</p>
                <Button href={item.link} isLinkStyle target="_blank">
                  {buttonText}
                </Button>
              </li>
            </Element>
          );
        })}
      </ul>
    </div>
  );
}
