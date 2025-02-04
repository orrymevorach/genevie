import Wrapper from '@/components/shared/Wrapper/Wrapper';
import styles from './Tiles.module.scss';
import Link from 'next/link';
import { ROUTES } from '@/utils/constants';
import useWindowSize from '@/hooks/useWindowSize';

const Tile = ({ title, description, index }) => {
  return (
    <div className={styles.tile}>
      <p className={styles.number}>{index + 1}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default function Tiles({ data = [] }) {
  const { isMobile } = useWindowSize();
  const buttonText = isMobile ? 'Learn more' : 'Learn more about our services';
  return (
    <Wrapper>
      <div className={styles.container}>
        {data.map((tile, index) => {
          return <Tile key={tile.title} {...tile} index={index} />;
        })}
      </div>
      <Link href={ROUTES.SERVICES} className={styles.button}>
        {buttonText}
      </Link>
    </Wrapper>
  );
}
