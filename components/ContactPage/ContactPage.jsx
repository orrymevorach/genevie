// import styles from './ContactPage.module.scss';
import Layout from '../shared/Layout/Layout';
import Reveal from '../shared/Reveal/Reveal';
import Wrapper from '../shared/Wrapper/Wrapper';
import BookSection from './BookSection/BookSection';
import ContactForm from './ContactForm/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Reveal>
        <BookSection />
      </Reveal>
      <Wrapper>
        <ContactForm />
      </Wrapper>
    </>
  );
}
