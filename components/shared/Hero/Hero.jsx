import styles from './Hero.module.scss';
import clsx from 'clsx';

export default function Hero({
  imageUrl = '',
  children,
  classNames = {},
  isCenter = false,
}) {
  return (
    <div
      className={clsx(styles.container, classNames, isCenter && styles.center)}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
}
