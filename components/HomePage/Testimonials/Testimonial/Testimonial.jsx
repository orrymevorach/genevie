import Link from 'next/link';
import styles from './Testimonial.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import useWindowSize from '@/hooks/useWindowSize';

export default function Testimonial({
  name,
  testimonial,
  link = '#',
  randomX,
}) {
  const { isMobile } = useWindowSize();

  return (
    <Link
      className={clsx(styles.testimonial, styles.animate)}
      href={link}
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
