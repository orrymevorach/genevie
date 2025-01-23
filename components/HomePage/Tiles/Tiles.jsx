import Wrapper from '@/components/shared/Wrapper/Wrapper';
import styles from './Tiles.module.scss';

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
  return (
    <Wrapper>
      <div className={styles.container}>
        {data.map((tile, index) => {
          return <Tile key={tile.title} {...tile} index={index} />;
        })}
      </div>
      <button className={styles.button}>Learn more about our services</button>
    </Wrapper>
  );
}
