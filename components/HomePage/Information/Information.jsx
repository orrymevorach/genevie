import Button from '@/components/shared/Button/Button';
import styles from './Information.module.scss';
import Wrapper from '@/components/shared/Wrapper/Wrapper';
import { useIframeContext } from '@/components/shared/Layout/Layout';
import RichText from '@/components/shared/RichText/RichText';

export default function Information({ richText }) {
  const { setShowIframe } = useIframeContext();
  return (
    <Wrapper classNames={styles.wrapper}>
      <RichText json={richText.richText} />
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
