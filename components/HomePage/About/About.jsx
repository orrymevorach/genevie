import Wrapper from '@/components/shared/Wrapper/Wrapper';
import styles from './About.module.scss';
import Image from 'next/image';
import image from '@/public/pregnant.png';
import Button from '@/components/shared/Button/Button';
import { ROUTES } from '@/utils/constants';
import RichText from '@/components/shared/RichText/RichText';

export default function About({ richText }) {
  return (
    <div className={styles.container}>
      <Wrapper classNames={styles.wrapper}>
        <div>
          <Image src={image} alt="" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <RichText json={richText.richText} />

          <Button isTertiary classNames={styles.button} href={ROUTES.ABOUT}>
            Meet the founder
          </Button>
        </div>
      </Wrapper>
    </div>
  );
}
