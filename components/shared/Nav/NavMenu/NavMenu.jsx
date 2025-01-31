import styles from './NavMenu.module.scss';
import clsx from 'clsx';
import Wrapper from '../../Wrapper/Wrapper';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/utils/constants';
import logo from 'public/logo.png';

export default function NavMenu({ fadeOut }) {
  return (
    <>
      <div className={clsx(styles.navMenu, fadeOut && styles.fadeOut)}>
        <Wrapper classNames={styles.wrapper}>
          <div className={styles.innerContainer}>
            <div>
              <Link href={ROUTES.HOME} className={styles.logoLink}>
                <Image src={logo} alt="logo" className={styles.logo} />
              </Link>
            </div>
            <ul className={styles.listItems}>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/providers">For Providers</Link>
              </li>
              <li>
                <Link href="/library">Library</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={styles.bold}>Book Now</li>
            </ul>
          </div>
          <div className={styles.footer}>
            <p>© 2024 Genevie Health. All Rights Reserved.</p>
            <div className={styles.socials}>
              <a href="#">Instagram</a> / <a href="#">Linkedin</a> /{' '}
              <a href="#">Tik Tok</a>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
