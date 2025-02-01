import { createContext, useContext, useState } from 'react';
import styles from './Layout.module.scss';
import Nav from '@/components/shared/Nav/Nav';
import Footer from '../Footer/Footer';
import AppointmentsIframe from '../Nav/AppointmentsIframe/AppointmentsIframe';

const IframeContext = createContext();
export const useIframeContext = () => {
  return useContext(IframeContext);
};

export default function Layout({ children }) {
  const [showIframe, setShowIframe] = useState(false);
  return (
    <IframeContext.Provider value={{ showIframe, setShowIframe }}>
      <div>
        {showIframe && <AppointmentsIframe setShowIframe={setShowIframe} />}
        <Nav setShowIframe={setShowIframe} />
        <div className={styles.children}>{children}</div>
        <Footer />
      </div>
    </IframeContext.Provider>
  );
}
