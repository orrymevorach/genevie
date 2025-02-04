import Image from 'next/image';
import styles from './Services.module.scss';
import RichText from '@/components/shared/RichText/RichText';
import Wrapper from '@/components/shared/Wrapper/Wrapper';
import useWindowSize from '@/hooks/useWindowSize';
import Reveal from '@/components/shared/Reveal/Reveal';

export default function Services({ services }) {
  const { isMobile } = useWindowSize();
  return (
    <Wrapper classNames={styles.wrapper}>
      <div className={styles.intro}>
        Included in Your {!isMobile && <br />}
        Genevie Experience
      </div>
      {services.map(service => {
        const { title, icon, textContent } = service;
        return (
          <Reveal key={service.title}>
            <div className={styles.service}>
              <Image
                src={icon.src}
                height={icon.height}
                width={icon.width}
                alt=""
                className={styles.icon}
              />
              <p className={styles.title}>{title}</p>
              <RichText json={textContent} classNames={styles.richText} />
            </div>
          </Reveal>
        );
      })}
    </Wrapper>
  );
}
