import Image from 'next/image';
import Wrapper from '../Wrapper/Wrapper';
import styles from './Footer.module.scss';
import logo from 'public/logo.png';
import logoIcon from 'public/logo-icon.png';
import { ROUTES } from '@/utils/constants';
import Link from 'next/link';
import useWindowSize from '@/hooks/useWindowSize';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import { sendFormSubmission } from '@/lib/mailgun';

const Email = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await sendFormSubmission({
      fields: {
        email,
      },
      formName: 'Mailing List',
    });
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isLoading) return <Loader isDotted classNames={styles.loader} />;
  if (isSubmitted) return <p className={styles.thankYou}>Thank you!</p>;

  return (
    <form className={styles.emailContainer} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        className={styles.emailInput}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </form>
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
  const { isMobile } = useWindowSize();
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.topRow}>
          <Link href={ROUTES.HOME}>
            <Image src={logo} alt="Logo" className={styles.logo} />
          </Link>
          {!isMobile && (
            <Link href={ROUTES.HOME}>
              <Image src={logoIcon} alt="Logo" className={styles.logoIcon} />
            </Link>
          )}
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
        {isMobile && (
          <Link href={ROUTES.HOME}>
            <Image src={logoIcon} alt="Logo" className={styles.logoIcon} />
          </Link>
        )}
        <div className={styles.bottomRow}>
          <p>&copy; GENEVIE {currentYear}</p>
          <p>Privacy Policy</p>
        </div>
      </Wrapper>
    </footer>
  );
}
