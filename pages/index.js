import Meta from '@/components/shared/Head/Head';
import Login from '@/components/LoginPage/Login';
import useAuth from '@/hooks/useAuth';

export default function LoginPage() {
  useAuth();
  return (
    <>
      <Meta />
      <Login />
    </>
  );
}
