import Image from 'next/image';
import Wrapper from '../Wrapper/Wrapper';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import logo from 'public/logo.png';
import logoIcon from 'public/logo-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Email = () => {
  return (
    <div className={styles.emailContainer}>
      <input type="email" placeholder="Email" className={styles.emailInput} />
      <FontAwesomeIcon
        icon={faChevronRight}
        className={styles.chevron}
        size="sm"
      />
    </div>
  );
};

const data = [
  {
    title: 'Mailing List',
    links: [
      { title: 'RECEIVE OUR MONTHLY NEWSLETTER AND UPDATES', url: '/signup' },
    ],
    Component: Email,
  },
  {
    title: 'Follow Along',
    links: [
      { title: 'instagram', url: '' },
      { title: 'tik tok', url: '' },
    ],
  },
  {
    title: 'About',
    links: [
      { title: 'meet the founder', url: '' },
      { title: 'contact', url: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.topRow}>
          <Image src={logo} alt="Logo" className={styles.logo} />
          <Image src={logoIcon} alt="Logo" className={styles.logoIcon} />
        </div>
        <div className={styles.columns}>
          {data.map(column => {
            const Component = column.Component;
            return (
              <div className={styles.column} key={column.title}>
                <p className={styles.title}>{column.title}</p>
                <ul>
                  {column.links.map(link => {
                    return (
                      <li key={link.title} className={styles.link}>
                        <a href={link.url}>{link.title}</a>
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
          <p>&copy; GENEVIE 2024</p>
          <p>Privacy Policy</p>
        </div>
      </Wrapper>
    </footer>
  );
}
