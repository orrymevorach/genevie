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
      <Reveal>
        <div className={styles.textContainer}>
          <p className={styles.heading}>
            Included in Your {!isMobile && <br />}
            Genevie Experience
          </p>
          <p className={styles.description}>
            Services are tailored to meet your unique needs, offering
            data-driven clinical guidance and experienced support every step of
            the way.
          </p>
        </div>
      </Reveal>
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
      <Reveal>
        <p className={styles.disclaimer}>
          Please note: due to state licensure laws, we can accept patients who
          will physically be in the following states at the time of consult:
          Alaska, Arizona, California, Colorado, Illinois, Kansas, Maine,
          Mississippi, Missouri, Nevada, New York, North Carolina, South
          Carolina, Texas, West Virginia
        </p>
      </Reveal>
    </Wrapper>
  );
}
