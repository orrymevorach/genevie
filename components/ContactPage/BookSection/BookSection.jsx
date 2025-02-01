import Button from '@/components/shared/Button/Button';
import styles from './BookSection.module.scss';
import { useIframeContext } from '@/components/shared/Layout/Layout';

export default function BookSection() {
  const { setShowIframe } = useIframeContext();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Book A Consultation</h2>
      <p className={styles.description}>
        Ready to get started? Click below to schedule your complimentary
        10-minute session to explore your goals and questions. Availability is
        based on limited number of accepts clients per year.
      </p>

      <Button isTertiary handleClick={() => setShowIframe(true)}>
        Schedule Now
      </Button>
    </div>
  );
}
