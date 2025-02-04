import { useState } from 'react';
import styles from './ContactForm.module.scss';
import Form from '../../shared/Form/Form';
import Loader from '@/components/shared/Loader/Loader';
import CopyToClipboard from '@/components/shared/CopyToClipboard/CopyToClipboard';

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

  const TextElement = ({ classNames = {} }) => {
    return (
      <p className={classNames}>
        If you want to join the Genevie team or have any questions, please email
        us at{' '}
        <CopyToClipboard text="info@geneviehealth.com">
          <span>info@geneviehealth.com</span>
        </CopyToClipboard>{' '}
        or fill out the form below.
      </p>
    );
  };

  return (
    <div className={styles.container}>
      {!isSubmitted ? (
        <Form
          formConfig={formConfig}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          heading="General Inquiries"
          TextElement={TextElement}
        />
      ) : (
        <h2 className={styles.thankYou}>Thank you for your submission!</h2>
      )}
    </div>
  );
}
