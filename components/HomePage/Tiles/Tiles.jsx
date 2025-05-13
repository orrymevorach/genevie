import Wrapper from '@/components/shared/Wrapper/Wrapper';
import styles from './Tiles.module.scss';
import Link from 'next/link';
import { ROUTES } from '@/utils/constants';
import useWindowSize from '@/hooks/useWindowSize';
import RichText from '@/components/shared/RichText/RichText';

const Tile = ({ title, description }) => {
  return (
    <div className={styles.tile}>
      <h2 className={styles.title}>{title}</h2>
      <RichText classNames={styles.description} json={description} />
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
