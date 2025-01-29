import Button from '@/components/shared/Button/Button';
import styles from './BookSection.module.scss';

export default function BookSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Book A Consultation</h2>
      <p className={styles.description}>
        Click below to schedule your complimentary 10-minute session to explore
        your goals and questions. Ready to get started? Schedule your first
        comprehensive session here.
      </p>
      <Button isTertiary>Schedule Now</Button>
    </div>
  );
}
