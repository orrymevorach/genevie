import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Button.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

const ButtonContents = ({ isLoading, children }) => {
  return (
    <>
      {isLoading ? (
        <FontAwesomeIcon icon={faSpinner} className={styles.spinnerIcon} />
      ) : (
        children
      )}
    </>
  );
};

export default function Button({
  children,
  isLoading = false,
  isDisabled = false,
  href = null,
  handleClick = null,
  classNames = {},
  isAnchor = false,
  isSecondary = false,
  isTertiary = false,
  style = {},
  isLinkStyle = false,
  target = null,
  isBeige = false,
}) {
  const classnames = clsx(
    styles.button,
    classNames,
    isSecondary && styles.secondary,
    isTertiary && styles.tertiary,
    isLinkStyle && styles.link,
    isBeige && styles.beige
  );

  if (isAnchor) {
    return (
      <a href={href} className={classnames} style={style} target={target}>
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={classnames} style={style} target={target}>
        {children}
      </Link>
    );
  }
  if (handleClick) {
    return (
      <button
        className={classnames}
        disabled={isDisabled}
        onClick={handleClick}
        style={style}
      >
        <ButtonContents isLoading={isLoading}>{children}</ButtonContents>
      </button>
    );
  }
  return (
    <button
      className={classnames}
      type="submit"
      disabled={isDisabled}
      style={style}
    >
      <ButtonContents isLoading={isLoading}>{children}</ButtonContents>
    </button>
  );
}
