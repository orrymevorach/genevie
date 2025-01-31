import Link from 'next/link';
import styles from './Nav.module.scss';
import { ROUTES } from '@/utils/constants';
import Image from 'next/image';
import clsx from 'clsx';
import NavMenu from '@/components/shared/Nav/NavMenu/NavMenu';
import Wrapper from '../Wrapper/Wrapper';
import logo from 'public/logo.png';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import { useState } from 'react';

export default function Nav({ isFixed = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [slideOut, setSlideOut] = useState(false);

  return (
    <nav className={clsx(styles.nav, isFixed && styles.fixed)}>
      <Wrapper classNames={styles.wrapper}>
        <div>
          <Link href={ROUTES.HOME} className={styles.logoLink}>
            <Image src={logo} alt="logo" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.rightContainer}>
          <button
            className={clsx(
              styles.bookButton,
              !isOpen && slideOut && styles.fadeOut
            )}
          >
            Book A Consultation
          </button>
          <HamburgerMenu
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            setSlideOut={setSlideOut}
            slideOut={slideOut}
          />
          {isOpen && <NavMenu slideOut={slideOut} isOpen={isOpen} />}
        </div>
      </Wrapper>
    </nav>
  );
}
