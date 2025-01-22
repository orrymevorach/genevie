import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import styles from './MobileNav.module.scss';
import clsx from 'clsx';
import Button from '@/components/shared/Button/Button';
import { useState } from 'react';

export default function MobileNav({ handleSignOut }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <div className={styles.hamburger}>
        <HamburgerMenu
          hamburgerMenuColor="white"
          setIsOpen={setIsMobileNavOpen}
        />
      </div>

      {isMobileNavOpen && (
        <>
          <div className={clsx(styles.mobileNav)}>
            <Button
              href=""
              isSmall
              classNames={styles.dashboardButton}
            ></Button>
          </div>
          <button
            onClick={() => setIsMobileNavOpen(false)}
            className={styles.overlay}
          ></button>
        </>
      )}
    </>
  );
}
