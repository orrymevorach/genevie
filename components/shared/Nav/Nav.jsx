import Link from 'next/link';
import styles from './Nav.module.scss';
import Button from '@/components/shared/Button/Button';
import { COOKIES, ROUTES } from '@/utils/constants';
import Image from 'next/image';
import desktopDarkLogo from '@/public/logo-center.png';
import desktopLightLogo from '@/public/logo-center-white.png';
import mobileDarkLogo from '@/public/logo-bracket.png';
import mobileLightLogo from '@/public/logo-bracket-white.png';
import clsx from 'clsx';
import useWindowSize from '@/hooks/useWindowSize';
import { signOutOfFirebase } from '@/lib/firebase-auth';
import Cookies from 'js-cookie';
import MobileNav from '@/components/shared/Nav/MobileNav/MobileNav';
import Wrapper from '../Wrapper/Wrapper';

const mapDeviceToLogo = {
  mobile: {
    light: mobileLightLogo,
    dark: mobileDarkLogo,
  },
  desktop: {
    light: desktopLightLogo,
    dark: desktopDarkLogo,
  },
};

export default function Nav({ isDark, isFixed }) {
  const { isMobile } = useWindowSize();

  const logoTheme = isDark ? 'dark' : 'light';
  const logo = mapDeviceToLogo[isMobile ? 'mobile' : 'desktop'][logoTheme];

  const handleSignOut = async () => {
    await signOutOfFirebase();
    Cookies.remove(COOKIES.UID);
    window.location = ROUTES.HOME;
  };

  return (
    <nav className={clsx(styles.nav, isFixed && styles.fixed)}>
      <Wrapper>
        <div className={styles.grid}>
          <div>
            <Link href={ROUTES.HOME} className={styles.logoLink}>
              <Image src={logo} alt="logo" className={styles.logo} />
            </Link>
            <p className={styles.admin}>Admin Console</p>
          </div>
          {isMobile && !isHomePage ? (
            <MobileNav handleSignOut={handleSignOut} />
          ) : (
            <div className={styles.buttonsContainer}>
              <Button handleClick={handleSignOut} isSmall isNaked>
                <p>Sign Out</p>
              </Button>
            </div>
          )}
        </div>
      </Wrapper>
    </nav>
  );
}
