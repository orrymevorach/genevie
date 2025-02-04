import styles from './Hero.module.scss';
import clsx from 'clsx';
import Wrapper from '@/components/shared/Wrapper/Wrapper';
import Button from '@/components/shared/Button/Button';
import RichText from '@/components/shared/RichText/RichText';
import { BLOCKS } from '@contentful/rich-text-types';
import { motion } from 'framer-motion';
import useWindowSize from '@/hooks/useWindowSize';
import { getMedia } from '@/lib/contentful-utils';

const getRichTextConfig = ({ shrinkWrapper = false }) => ({
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
});

export default function Hero({
  children,
  classNames = {},
  isCenter = false,
  isSmall = false,
  shouldAnimate = false,
  bannerFields,
  shrinkWrapper = false,
}) {
  const Element = shouldAnimate ? motion.div : 'div';
  const { isMobile } = useWindowSize();
  const imageFields = getMedia(bannerFields.image);
  const mobileImagesFields = bannerFields?.mobileImage
    ? getMedia(bannerFields.mobileImage)
    : null;
  const imageUrl =
    isMobile && mobileImagesFields ? mobileImagesFields.src : imageFields.src;
  const text = bannerFields.text;
  return (
    <Element
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={clsx(
        styles.container,
        classNames,
        isCenter && styles.center,
        isSmall && styles.small
      )}
      style={{
        backgroundImage: `url(${imageUrl})`,
        transformOrigin: isMobile ? 'center right' : 'center',
      }}
    >
      <Wrapper classNames={clsx(styles.wrapper, isCenter && styles.center)}>
        <Element
          className={clsx(styles.textContainer)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        >
          <div className={shrinkWrapper ? styles.wrapperContainer : {}}>
            <RichText
              json={text}
              config={getRichTextConfig({ shrinkWrapper })}
            />
          </div>
          <div className={styles.buttonsContainer}>{children && children}</div>
        </Element>
      </Wrapper>
    </Element>
  );
}
