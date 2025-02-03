import styles from './Hero.module.scss';
import clsx from 'clsx';
import Wrapper from '@/components/shared/Wrapper/Wrapper';
import Button from '@/components/shared/Button/Button';
import RichText from '@/components/shared/RichText/RichText';
import { BLOCKS } from '@contentful/rich-text-types';

export const richTextConfig = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className={styles.paragraph}>{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className={styles.title}>{children}</h1>;
    },
    // [INLINES.HYPERLINK]: (node, children) => (
    //   <Link
    //     href={node.data.uri}
    //     className={styles.link}
    //     target="_blank"
    //     rel="noreferrer"
    //     isSecondary
    //     isRound
    //   >
    //     {children}
    //   </Link>
    // ),
  },
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

export default function Hero({
  imageUrl = '',
  children,
  classNames = {},
  isCenter = false,
  isSmall = false,
  text,
}) {
  return (
    <div
      className={clsx(
        styles.container,
        classNames,
        isCenter && styles.center,
        isSmall && styles.small
      )}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Wrapper classNames={clsx(styles.wrapper, isCenter && styles.center)}>
        <div className={clsx(styles.textContainer)}>
          <RichText json={text} config={richTextConfig} />
          {children && (
            <div className={styles.buttonsContainer}>{children}</div>
          )}
        </div>
      </Wrapper>
    </div>
  );
}
