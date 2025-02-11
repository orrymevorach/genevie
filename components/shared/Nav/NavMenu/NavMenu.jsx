import styles from './NavMenu.module.scss';
import clsx from 'clsx';
import Wrapper from '../../Wrapper/Wrapper';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useWindowSize from '@/hooks/useWindowSize';
import { ROUTES } from '@/utils/constants';
import Button from '../../Button/Button';

const navItems = [
  { path: ROUTES.SERVICES, label: 'Services' },
  { path: ROUTES.MEET_THE_FOUNDER, label: 'Meet The Founder' },
  { path: ROUTES.PROVIDERS, label: 'For Providers' },
  { path: ROUTES.LIBRARY, label: 'Library' },
  { path: ROUTES.CONTACT, label: 'Contact' },
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

  const { isMobile } = useWindowSize();

  const Element = isMobile ? motion.li : 'li';

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
            <div className={styles.right}>
              <ul className={styles.listItems}>
                {navItems.map((item, index) => {
                  return (
                    <Element
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
                    </Element>
                  );
                })}
                <Element
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: (navItems.length - 5) * 0.1, // Reverse stagger delay
                    ease: 'easeOut',
                  }}
                >
                  <Button
                    classNames={styles.button}
                    handleClick={handleClickBookNow}
                    isTertiary
                  >
                    Book Now
                  </Button>
                </Element>
              </ul>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
