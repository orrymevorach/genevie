import Link from 'next/link';
import styles from './Testimonial.module.scss';
import clsx from 'clsx';
import useWindowSize from '@/hooks/useWindowSize';
import { ROUTES } from '@/utils/constants';
import star from 'public/star.png';
import Image from 'next/image';

export default function Testimonial({ name, testimonial, randomX, index }) {
  const { isMobile } = useWindowSize();

  return (
    <Link
      className={clsx(styles.testimonial, styles.animate)}
      href={`${ROUTES.TESTIMONIALS}#testimonial-${index + 1}`}
      style={{ left: !isMobile ? `${randomX}%` : '0' }}
    >
      <div className={styles.topRow}>
        <Image src={star} alt="" className={styles.star} />
        <Image src={star} alt="" className={styles.star} />
        <Image src={star} alt="" className={styles.star} />
        <Image src={star} alt="" className={styles.star} />
        <Image src={star} alt="" className={styles.star} />
      </div>
      <p className={styles.testimonialText}>{testimonial}</p>
      <div className={styles.bottomRow}>
        <p className={styles.name}>{name}</p>
        <p className={styles.readMore}>Read More</p>
      </div>
    </Link>
  );
}
