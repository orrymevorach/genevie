import RichText from '@/components/shared/RichText/RichText';
import styles from './Publications.module.scss';
import Button from '@/components/shared/Button/Button';
import Reveal from '@/components/shared/Reveal/Reveal';
import useWindowSize from '@/hooks/useWindowSize';

export default function Publications({ publications }) {
  const { isMobile } = useWindowSize();
  const ElementTitle = isMobile ? Reveal : 'p';
  const ElementDiv = isMobile ? Reveal : 'div';

  return (
    <div className={styles.container}>
      <ElementTitle className={styles.title}>Publications</ElementTitle>
      {publications.map(({ publicationName, description, link }) => {
        return (
          <ElementDiv key={publicationName} className={styles.publication}>
            <p className={styles.name}>{publicationName}</p>
            <RichText json={description} />
            {link && (
              <Button
                isLinkStyle
                href={link}
                classNames={styles.button}
                target={'_blank'}
              >
                Read More
              </Button>
            )}
          </ElementDiv>
        );
      })}
    </div>
  );
}
