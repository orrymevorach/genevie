import Image from 'next/image';
import styles from './Services.module.scss';
import RichText from '@/components/shared/RichText/RichText';
import Wrapper from '@/components/shared/Wrapper/Wrapper';

export default function Services({ services }) {
  return (
    <Wrapper classNames={styles.container}>
      <div className={styles.intro}>
        <p>
          Included in Your <br />
          Genevie Experience
        </p>
      </div>
      {services.map(service => {
        const { title, icon, textContent } = service;
        return (
          <div key={service.title} className={styles.service}>
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
        );
      })}
    </Wrapper>
  );
}
