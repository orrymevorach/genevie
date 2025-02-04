import styles from './NavMenu.module.scss';
import clsx from 'clsx';
import Wrapper from '../../Wrapper/Wrapper';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/providers', label: 'For Providers' },
  { path: '/library', label: 'Library' },
  { path: '/contact', label: 'Contact' },
];

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
              {navItems.map((item, index) => {
                return (
                  <motion.li
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: (navItems.length - index) * 0.1, // Reverse stagger delay
                      ease: 'easeOut',
                    }}
                    key={item.label}
                  >
                    <Link href={item.path} className={styles.link}>
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: (navItems.length - 5) * 0.1, // Reverse stagger delay
                  ease: 'easeOut',
                }}
              >
                <button
                  className={clsx(styles.link, styles.bold)}
                  onClick={handleClickBookNow}
                >
                  Book Now
                </button>
              </motion.li>
            </ul>
          </div>
          <div className={styles.footer}>
            <p className={styles.copyright}>
              © 2024 Genevie Health. All Rights Reserved.
            </p>
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
