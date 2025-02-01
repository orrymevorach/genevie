import styles from './NavMenu.module.scss';
import clsx from 'clsx';
import Wrapper from '../../Wrapper/Wrapper';
import Link from 'next/link';

export default function NavMenu({
  slideOut,
  isOpen,
  setShowIframe,
  setIsOpen,
}) {
  const handleClickBookNow = () => {
    setIsOpen(false);
    setShowIframe(true);
  };
  return (
    <>
      {isOpen && (
        <div
          className={clsx(styles.overlay, isOpen && slideOut && styles.fadeOut)}
        ></div>
      )}
      <div className={clsx(styles.navMenu, slideOut && styles.slideOut)}>
        <Wrapper classNames={styles.wrapper}>
          <div className={styles.innerContainer}>
            <div></div>
            <ul className={styles.listItems}>
              <li>
                <Link href="/about" className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.link}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/providers" className={styles.link}>
                  For Providers
                </Link>
              </li>
              <li>
                <Link href="/library" className={styles.link}>
                  Library
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
              <li>
                <button
                  className={clsx(styles.link, styles.bold)}
                  onClick={handleClickBookNow}
                >
                  Book Now
                </button>
              </li>
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
