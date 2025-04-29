import styles from './Testimonials.module.scss';
import { useEffect, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import Reveal from '@/components/shared/Reveal/Reveal';
import Testimonial from './Testimonial/Testimonial';

export default function Testimonials({ testimonials = [] }) {
  const { isMobile } = useWindowSize();
  const [activeTestimonials, setActiveTestimonials] = useState([]);

  useEffect(() => {
    if (isMobile) {
      setActiveTestimonials(
        testimonials.map((test, index) => ({ ...test, index }))
      );
      return;
    }

    const interval = setInterval(() => {
      setActiveTestimonials(prev => {
        const now = Date.now();

        const nextIndex = prev.length % testimonials.length;
        const randomX = Math.random() * 80;

        const newActive = {
          id: `${now}-${nextIndex}`,
          index: nextIndex,
          randomX,
        };

        return [...prev, newActive];
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [testimonials.length, isMobile, testimonials]);

  return (
    <Reveal>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>What Our Clients Say</h2>
        </div>

        <div className={styles.testimonials}>
          {activeTestimonials.map(({ id, index, randomX }) => {
            if (!activeTestimonials[index]) {
              return null;
            }
            const {
              name,
              homePageSnippet: testimonial,
              link,
            } = testimonials[index];
            return (
              <Testimonial
                key={id}
                name={name}
                testimonial={testimonial}
                link={link}
                randomX={randomX}
              />
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
