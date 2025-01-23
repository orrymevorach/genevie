import styles from './Layout.module.scss';
import Nav from '@/components/shared/Nav/Nav';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
