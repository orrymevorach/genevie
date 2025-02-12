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
import clsx from 'clsx';
import { useIframeContext } from '../Layout/Layout';

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
      <button className={styles.submitButton}>&gt;</button>
    </form>
  );
};

const getData = ({ setShowIframe }) => [
  {
    links: [
      { title: 'Mailing List', isTitle: true },
      { title: 'RECEIVE OUR MONTHLY NEWSLETTER AND UPDATES' },
    ],
    Component: Email,
  },
  {
    links: [
      {
        title: 'Meet The Founder',
        url: ROUTES.MEET_THE_FOUNDER,
      },
      {
        title: 'Services',
        url: ROUTES.SERVICES,
      },
      {
        title: 'Library',
        url: ROUTES.LIBRARY,
      },
      {
        title: 'For Providers',
        url: ROUTES.PROVIDERS,
      },
    ],
  },
  {
    links: [
      { title: 'Contact', url: ROUTES.CONTACT },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/geneviehealth/',
        target: '_blank',
      },
      { title: 'Book Now', handleClick: () => setShowIframe(true) },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isMobile } = useWindowSize();
  const { setShowIframe } = useIframeContext();
  const data = getData({ setShowIframe });
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
          {data.map((column, index) => {
            const Component = column.Component;
            return (
              <div className={styles.column} key={`footer-column-${index}`}>
                <ul>
                  {column.links.map(link => {
                    if (link.handleClick) {
                      return (
                        <li
                          key={link.title}
                          className={clsx(styles.link, styles.button)}
                          onClick={link.handleClick}
                        >
                          {link.title}
                        </li>
                      );
                    }
                    if (link.url) {
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
                    }
                    return (
                      <li
                        key={link.title}
                        className={clsx(
                          styles.link,
                          link.isTitle && styles.title,
                          styles.noCursor
                        )}
                      >
                        {link.title}
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
          <p>
            <Link href={ROUTES.PRIVACY_POLICY}>Privacy Policy</Link>
          </p>
          <p>
            <Link href={ROUTES.TERMS_OF_USE}>Terms Of Use</Link>
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}
