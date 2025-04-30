import RichText from '../shared/RichText/RichText';
import Wrapper from '../shared/Wrapper/Wrapper';
import styles from './TestimonialsPage.module.scss';
import Reveal from '../shared/Reveal/Reveal';
import apos from 'public/apos.png';
import Image from 'next/image';
import { BLOCKS } from '@contentful/rich-text-types';
import star from 'public/star.png';

export const config = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className={styles.richText}>{children}</p>;
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

export default function TestimonialsPage({ entries }) {
  const [testimonials] = entries;
  if (!testimonials || testimonials.length === 0) return;
  return (
    <Reveal>
      <h1 className={styles.title}>Testimonials</h1>
      <Wrapper>
        <div className={styles.testimonials}>
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={testimonial.name}
                id={`testimonial-${index + 1}`}
                className={styles.testimonial}
              >
                <Image src={apos} className={styles.quote} alt="" />
                <RichText json={testimonial.testimonial} config={config} />
                <div className={styles.stars}>
                  <Image src={star} alt="" className={styles.star} />
                  <Image src={star} alt="" className={styles.star} />
                  <Image src={star} alt="" className={styles.star} />
                  <Image src={star} alt="" className={styles.star} />
                  <Image src={star} alt="" className={styles.star} />
                </div>
                <p className={styles.name}>{testimonial.name}</p>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </Reveal>
  );
}
