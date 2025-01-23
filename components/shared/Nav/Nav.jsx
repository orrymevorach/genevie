import Link from 'next/link';
import styles from './Nav.module.scss';
import Button from '@/components/shared/Button/Button';
import { ROUTES } from '@/utils/constants';
import Image from 'next/image';
import clsx from 'clsx';
import useWindowSize from '@/hooks/useWindowSize';
import MobileNav from '@/components/shared/Nav/MobileNav/MobileNav';
import Wrapper from '../Wrapper/Wrapper';
import logo from 'public/logo.png';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

// const mapDeviceToLogo = {
//   mobile: {
//     light: '',
//     dark: '',
//   },
//   desktop: {
//     light: '',
//     dark: '',
//   },
// };

export default function Nav({ isDark, isFixed = false }) {
  // const { isMobile } = useWindowSize();

  // const logoTheme = isDark ? 'dark' : 'light';
  // const logo = mapDeviceToLogo[isMobile ? 'mobile' : 'desktop'][logoTheme];

  return (
    <nav className={clsx(styles.nav, isFixed && styles.fixed)}>
      <Wrapper classNames={styles.wrapper}>
        <div>
          <Link href={ROUTES.HOME} className={styles.logoLink}>
            <Image src={logo} alt="logo" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.rightContainer}>
          <p>Book A Consultation</p>
          <HamburgerMenu />
          {/* <MobileNav /> */}
        </div>
      </Wrapper>
    </nav>
  );
}
