import CopyToClipboard from '../../CopyToClipboard/CopyToClipboard';
import CloseButton from '../../Takeover/CloseButton/CloseButton';
import styles from './AppointmentsIframe.module.scss';

export default function AppointmentsIframe({ setShowIframe }) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.iframeContainer}>
        <div className={styles.textContainer}>
          <p>
            Ready to book an appointment? Fill out the form below, or reach out
            to us anytime at{' '}
            <CopyToClipboard text="info@geneviehealth.com">
              <span className={styles.bold}>info@geneviehealth.com</span>
            </CopyToClipboard>
            .
          </p>
        </div>
        <div className={styles.closeButton}>
          <CloseButton handleClick={() => setShowIframe(false)} />
        </div>

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
      </div>
    </div>
  );
}
