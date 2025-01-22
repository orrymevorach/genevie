import Link from 'next/link';
import styles from './Nav.module.scss';
import Button from '@/components/shared/Button/Button';
import { COOKIES, ROUTES } from '@/utils/constants';
import Image from 'next/image';
import clsx from 'clsx';
import useWindowSize from '@/hooks/useWindowSize';
import { signOutOfFirebase } from '@/lib/firebase-auth';
import Cookies from 'js-cookie';
import MobileNav from '@/components/shared/Nav/MobileNav/MobileNav';
import Wrapper from '../Wrapper/Wrapper';

const mapDeviceToLogo = {
  mobile: {
    light: '',
    dark: '',
  },
  desktop: {
    light: '',
    dark: '',
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
          {isMobile ? (
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
