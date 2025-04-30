import styles from './Testimonials.module.scss';
import { useEffect, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import Reveal from '@/components/shared/Reveal/Reveal';
import Testimonial from './Testimonial/Testimonial';
import Button from '@/components/shared/Button/Button';
import { ROUTES } from '@/utils/constants';
import Wrapper from '@/components/shared/Wrapper/Wrapper';

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

  const Container = isMobile ? Wrapper : 'div';

  return (
    <Container>
      <Reveal>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>What Our Clients Say</h2>
            <Button
              href={ROUTES.TESTIMONIALS}
              isTertiary
              classNames={styles.button}
            >
              Read Testimonials
            </Button>
          </div>

          <div className={styles.testimonials}>
            {activeTestimonials.map(({ id, index, randomX }, idx) => {
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
                  index={idx}
                />
              );
            })}
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
