import Image from 'next/image';
import Wrapper from '../Wrapper/Wrapper';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import logo from 'public/logo.png';
import logoIcon from 'public/logo-icon.png';
import { ROUTES } from '@/utils/constants';
import Link from 'next/link';

const Email = () => {
  return (
    <div className={styles.emailContainer}>
      <input type="email" placeholder="Email" className={styles.emailInput} />
    </div>
  );
};

const data = [
  {
    title: 'Mailing List',
    links: [{ title: 'RECEIVE OUR MONTHLY NEWSLETTER AND UPDATES' }],
    Component: Email,
  },
  {
    title: 'Follow Along',
    links: [
      {
        title: 'instagram',
        url: 'https://www.instagram.com/geneviehealth/',
        target: '_blank',
      },
    ],
  },
  {
    title: 'About',
    links: [
      { title: 'meet the founder', url: ROUTES.ABOUT },
      { title: 'contact', url: ROUTES.CONTACT },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.topRow}>
          <Link href={ROUTES.HOME}>
            <Image src={logo} alt="Logo" className={styles.logo} />
          </Link>
          <Link href={ROUTES.HOME}>
            <Image src={logoIcon} alt="Logo" className={styles.logoIcon} />
          </Link>
        </div>
        <div className={styles.columns}>
          {data.map(column => {
            const Component = column.Component;
            return (
              <div className={styles.column} key={column.title}>
                <p className={styles.title}>{column.title}</p>
                <ul>
                  {column.links.map(link => {
                    if (!link.url) {
                      return (
                        <li key={link.title} className={styles.link}>
                          {link.title}
                        </li>
                      );
                    }
                    return (
                      <li key={link.title} className={styles.link}>
                        <a
                          href={link.url}
                          className={styles.anchor}
                          target={link.target}
                        >
                          {link.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                {Component && <Component />}
              </div>
            );
          })}
        </div>
        <div className={styles.bottomRow}>
          <p>&copy; GENEVIE {currentYear}</p>
          <p>Privacy Policy</p>
        </div>
      </Wrapper>
    </footer>
  );
}
