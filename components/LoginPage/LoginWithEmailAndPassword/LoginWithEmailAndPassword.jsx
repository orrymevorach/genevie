import { useState } from 'react';
import styles from './LoginWithEmailAndPassword.module.scss';
import { useRouter } from 'next/router';
import { COOKIES, ROUTES } from 'utils/constants';
import Button from '@/components/shared/Button/Button';
import {
  errors,
  signInWithFirebaseEmailAndPassword,
} from '@/lib/firebase-auth';
import Input from '@/components/shared/Input/Input';
import Cookies from 'js-cookie';

export default function LoginWithEmailAndPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    const response = await signInWithFirebaseEmailAndPassword({
      email,
      password,
    });

    if (response?.user) {
      setError('');
      Cookies.set(COOKIES.UID, response.user.uid);
      router.push(ROUTES.ADMIN);
    } else if (
      response.error.code === 'auth/invalid-email' ||
      response.error.code === 'auth/user-not-found'
    ) {
      setIsLoading(false);
      return;
    } else if (response?.error) {
      const code = response.error.code;
      const errorMessage = errors[code]?.message || errors.GENERIC.message;
      setError(errorMessage);
    }
    setIsLoading(false);
  };

  const handleChangeEmail = e => {
    setError('');
    setEmail(e.target.value.toLowerCase());
  };

  const handleChangePassword = e => {
    setError('');
    setPassword(e.target.value);
  };

  return (
    <>
      <form
        action="#"
        onSubmit={e => handleSubmit(e)}
        className={styles.container}
      >
        <Input
          type="email"
          id="email"
          handleChange={e => handleChangeEmail(e)}
          classNames={styles.emailInput}
          value={email}
          error={error}
          placeholder="Email address*"
        />
        <Input
          type="password"
          id="password"
          handleChange={e => handleChangePassword(e)}
          placeholder="Password"
          value={password}
          classNames={styles.passwordInput}
        />
        <Button isLoading={isLoading} classNames={styles.submit} isSecondary>
          Continue
        </Button>
      </form>
    </>
  );
}
