import Button from '@/components/shared/Button/Button';
import styles from './Information.module.scss';
import Wrapper from '@/components/shared/Wrapper/Wrapper';
import { useIframeContext } from '@/components/shared/Layout/Layout';

export default function Information() {
  const { setShowIframe } = useIframeContext();
  return (
    <Wrapper classNames={styles.container}>
      <p className={styles.title}>
        Expert guidance from preconception to parenthood
      </p>
      <p className={styles.description}>
        GENEVIE is a first-of-its kind concierge health service providing
        comprehensive evaluations, personalized genetic testing, and tailored
        reproductive support to prepare you for every stage of your journey.
      </p>
      <Button
        classNames={styles.button}
        isTertiary
        handleClick={() => setShowIframe(true)}
      >
        Book A Consultation
      </Button>
    </Wrapper>
  );
}
