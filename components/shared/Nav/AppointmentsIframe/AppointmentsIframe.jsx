import { useState } from 'react';
import CloseButton from '../../Takeover/CloseButton/CloseButton';
import styles from './AppointmentsIframe.module.scss';
import clsx from 'clsx';
import ContactForm from './ContactForm/ContactForm';

export default function AppointmentsIframe({ setShowIframe }) {
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  return (
    <div
      className={clsx(styles.container, isSendingEmail && styles.contactForm)}
    >
      <div className={styles.overlay}></div>
      <div className={styles.iframeContainer}>
        <div className={styles.closeButton}>
          <CloseButton handleClick={() => setShowIframe(false)} />
        </div>
        {isSendingEmail ? (
          <ContactForm />
        ) : (
          <>
            <iframe
              src="https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=7113289&provider_ids=%5B7113289%5D&appt_type_ids=%5B443516,445794,443517,445796,443518%5D"
              style={{
                width: '100%',
                minHeight: '600px',
                border: '0px',
                margin: '0 auto',
                display: 'block',
              }}
              className={styles.iframe}
            ></iframe>
            <div className={styles.textContainer}>
              <p>
                Ready to book an appointment? Fill out the form above, or reach
                out to us anytime at{' '}
                <button
                  onClick={() => setIsSendingEmail(true)}
                  className={styles.button}
                >
                  <span className={styles.bold}>info@geneviehealth.com</span>
                </button>
                .
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
