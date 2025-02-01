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
  isLight = false,
  isAnchor = false,
  isSmall = false,
  isInverted = false,
  isSecondary = false,
  isTertiary = false,
  isNaked = false,
  isRound = false,
  style = {},
  isLinkStyle = false,
}) {
  const classnames = clsx(
    styles.button,
    classNames,
    isLight && styles.light,
    isSmall && styles.small,
    isInverted && styles.inverted,
    isSecondary && styles.secondary,
    isNaked && styles.naked,
    isRound && styles.round,
    isTertiary && styles.tertiary,
    isLinkStyle && styles.link
  );

  if (isAnchor) {
    return (
      <a href={href} className={classnames} style={style}>
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={classnames} style={style}>
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
