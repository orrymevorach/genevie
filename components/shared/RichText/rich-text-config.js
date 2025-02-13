import Link from 'next/link';
import Button from '../Button/Button';
import styles from './RichText.module.scss';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

export const sharedRichTextConfig = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className={styles.richText}>{children}</p>;
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <Link
        href={node.data.uri}
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </Link>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className={styles.unorderedList}>{children}</ul>
    ),
    // [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,

    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className={styles.orderedList}>{children}</ol>
    ),
    [MARKS.UNDERLINE]: (node, children) => (
      <p className={styles.underline}>{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className={styles.title}>{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className={styles.subHeading}>{children}</h2>;
    },
  },
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [
        ...children,
        index > 0 && <div key={textSegment} className={styles.margin} />,
        textSegment,
      ];
    }, []);
  },
};
