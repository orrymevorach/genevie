import Link from 'next/link';
import styles from './Testimonial.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import useWindowSize from '@/hooks/useWindowSize';
import { ROUTES } from '@/utils/constants';

export default function Testimonial({ name, testimonial, randomX, index }) {
  const { isMobile } = useWindowSize();

  return (
    <Link
      className={clsx(styles.testimonial, styles.animate)}
      href={`${ROUTES.TESTIMONIALS}#testimonial-${index + 1}`}
      style={{ left: !isMobile ? `${randomX}%` : '0' }}
    >
      <p className={styles.testimonialText}>{testimonial}</p>
      <div className={styles.bottomRow}>
        <p className={styles.name}>{name}</p>
        <p className={styles.readMore}>
          Read More <FontAwesomeIcon icon={faChevronRight} size="sm" />
        </p>
      </div>
    </Link>
  );
}
