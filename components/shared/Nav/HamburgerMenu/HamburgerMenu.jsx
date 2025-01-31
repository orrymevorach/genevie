import React from 'react';
import styles from './HamburgerMenu.module.scss';
import clsx from 'clsx';

export default function HamburgerMenu({
  isOpen = false,
  setIsOpen,
  hamburgerMenuColor = '#2f2f2f',
  setFadeOut,
  fadeOut,
}) {
  const backgroundColor = isOpen ? '#2f2f2f' : hamburgerMenuColor;
  const handleClick = () => {
    if (isOpen) {
      setFadeOut(true);
      setTimeout(() => {
        setIsOpen(false);
        setFadeOut(false);
      }, 200);
      return;
    }
    setIsOpen(true);
  };
  return (
    <button
      className={clsx(
        styles.hamburgerMenu,
        isOpen && !fadeOut ? styles.open : ''
      )}
      onClick={handleClick}
    >
      <span style={{ backgroundColor }}></span>
      <span style={{ backgroundColor }}></span>
      <span style={{ backgroundColor }}></span>
      {/* <span style={{ backgroundColor }}></span> */}
    </button>
  );
}
