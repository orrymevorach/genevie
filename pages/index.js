import Meta from '@/components/shared/Head/Head';
import Login from '@/components/LoginPage/Login';
import useAuth from '@/hooks/useAuth';
import Cookies from 'cookies';
import { COOKIES } from '@/utils/constants';

export default function LoginPage() {
  useAuth();
  return (
    <>
      <Meta />
      <Login />
    </>
  );
}

export function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res);
  const uid = cookies.get(COOKIES.UID);
  if (uid)
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    };

  return {
    props: {},
  };
}
