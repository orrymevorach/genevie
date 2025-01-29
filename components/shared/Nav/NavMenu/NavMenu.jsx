import styles from './NavMenu.module.scss';
import clsx from 'clsx';
import Wrapper from '../../Wrapper/Wrapper';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/utils/constants';
import logo from 'public/logo.png';

export default function NavMenu() {
  return (
    <>
      <div className={clsx(styles.navMenu)}>
        <Wrapper classNames={styles.wrapper}>
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
        </Wrapper>
      </div>
    </>
  );
}
