import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RichText from '../shared/RichText/RichText';
import Wrapper from '../shared/Wrapper/Wrapper';
import styles from './TestimonialsPage.module.scss';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Reveal from '../shared/Reveal/Reveal';

export default function TestimonialsPage({ entries }) {
  const [testimonials] = entries;
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
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className={styles.icon}
                  size="lg"
                />
                <RichText json={testimonial.testimonial} />
                <p className={styles.name}>{testimonial.name}</p>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </Reveal>
  );
}
