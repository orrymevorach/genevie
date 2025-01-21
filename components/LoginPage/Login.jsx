import styles from './Login.module.scss';
import { initFirebaseAuth } from '@/lib/firebase-db';
import LoginWithEmailAndPassword from './LoginWithEmailAndPassword/LoginWithEmailAndPassword';
import Image from 'next/image';
import logo from '@/public/logo-center-white.png';

initFirebaseAuth();

export default function Login() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.loginContainer}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <p className={styles.admin}>Admin Console</p>
        <LoginWithEmailAndPassword />
      </div>
    </div>
  );
}
