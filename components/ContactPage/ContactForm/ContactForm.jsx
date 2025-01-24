import { useState } from 'react';
import styles from './ContactForm.module.scss';
import Form from '../../shared/Form/Form';
import Loader from '@/components/shared/Loader/Loader';

const ContactFormHeading = () => {
  return (
    <div className={styles.textContainer}>
      <h3 className={styles.title}>General Inquiries</h3>
      <p className={styles.description}>
        If you want to join the Genevie team or have any questions, please email
        us at info@geneviehealth.com or fill out the form below.
      </p>
    </div>
  );
};

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    const fields = {
      name,
      email,
      phone,
      message,
    };
    //   await sendArtistSubmissionForm({ fields });
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const formConfig = [
    {
      type: 'text',
      placeholder: 'Name',
      id: 'name',
      value: name,
      handleChange: value => setName(value),
      required: true,
    },
    {
      type: 'text',
      placeholder: 'Email',
      id: 'email',
      value: email,
      handleChange: value => setEmail(value),
      required: true,
    },
    {
      type: 'text',
      placeholder: 'Phone',
      id: 'phone',
      value: phone,
      handleChange: value => setPhone(value),
    },
    {
      type: 'textarea',
      label: 'Message',
      id: 'message',
      value: message,
      minRows: 7,
      handleChange: value => setMessage(value),
      required: true,
      maxWordCount: 250,
    },
  ];

  if (isLoading)
    return (
      <div className={styles.container}>
        <ContactFormHeading />
        <Loader />
      </div>
    );

  return (
    <div className={styles.container}>
      <ContactFormHeading />
      {!isSubmitted ? (
        <Form
          formConfig={formConfig}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          // inputClassNames={styles.input}
        />
      ) : (
        <h2 className={styles.thankYou}>Thank you for your submission!</h2>
      )}
    </div>
  );
}
