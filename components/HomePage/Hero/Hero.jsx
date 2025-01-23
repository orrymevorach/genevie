import Wrapper from '@/components/shared/Wrapper/Wrapper';
import styles from './Hero.module.scss';
import Button from '@/components/shared/Button/Button';

export default function Hero() {
  return (
    <div className={styles.container}>
      <Wrapper classNames={styles.wrapper}>
        <div className={styles.textContainer}>
          <p>
            The Next Generation of <br />
            Reproductive Healthcare
          </p>
          <div className={styles.buttonsContainer}>
            <Button classNames={styles.bookButton}>Book A Consultation</Button>
            <Button isSecondary>Services</Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
