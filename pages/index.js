import Meta from '@/components/shared/Head/Head';
import useAuth from '@/hooks/useAuth';

export default function LoginPage() {
  useAuth();
  return (
    <>
      <Meta />
    </>
  );
}
