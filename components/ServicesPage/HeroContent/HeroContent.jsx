import Button from '@/components/shared/Button/Button';
import styles from './HeroContent.module.scss';

export default function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <h2 className={styles.title}>
        Science backed guidance for <br />
        every step of your journey
      </h2>
      <p className={styles.description}>
        Services are tailored to meet your unique needs, offering data-driven
        clinical guidance and experienced support every step of the way.
      </p>
      <p className={styles.description}>
        Availability is based on limited number of accepted clients per year.
      </p>
      <Button isSecondary classNames={styles.button}>
        Book A Consultation
      </Button>
    </div>
  );
}
