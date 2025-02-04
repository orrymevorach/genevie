import useWindowSize from '@/hooks/useWindowSize';
import CloseButton from '../../Takeover/CloseButton/CloseButton';
import styles from './AppointmentsIframe.module.scss';

export default function AppointmentsIframe({ setShowIframe }) {
  const { isMobile } = useWindowSize();
  const width = isMobile ? '90%' : '600px';
  return (
    <div className={styles.iframeContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.closeButtonContainer}>
        <CloseButton handleClick={() => setShowIframe(false)} />
        <iframe
          src="https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=7113289&provider_ids=%5B7113289%5D&appt_type_ids=%5B443516,443517,443518%5D"
          style={{
            width,
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
