import Wrapper from '@/components/shared/Wrapper/Wrapper';
import styles from './HeroContent.module.scss';
import Button from '@/components/shared/Button/Button';
import RichText from '@/components/shared/RichText/RichText';
import { BLOCKS } from '@contentful/rich-text-types';
import clsx from 'clsx';

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

export default function HeroContent({
  text,
  isCenter = true,
  children,
  classNames = {},
  textContainerClassNames = {},
}) {
  return (
    <Wrapper
      classNames={clsx(styles.wrapper, isCenter && styles.center, classNames)}
    >
      <div className={clsx(styles.textContainer, textContainerClassNames)}>
        <RichText json={text} config={richTextConfig} />
        <div className={styles.buttonsContainer}>{children}</div>
      </div>
    </Wrapper>
  );
}
