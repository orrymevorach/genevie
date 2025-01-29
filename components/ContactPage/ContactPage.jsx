// import styles from './ContactPage.module.scss';
import Layout from '../shared/Layout/Layout';
import BookSection from './BookSection/BookSection';
import ContactForm from './ContactForm/ContactForm';

export default function ContactPage() {
  return (
    <Layout>
      <BookSection />
      <ContactForm />
    </Layout>
  );
}
