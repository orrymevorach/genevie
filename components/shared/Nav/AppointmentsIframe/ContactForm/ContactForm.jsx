import { useState } from 'react';
import styles from './ContactForm.module.scss';
import Form from '@/components/shared/Form/Form';
import CopyToClipboard from '@/components/shared/CopyToClipboard/CopyToClipboard';
import { sendFormSubmission } from '@/lib/mailgun';
import ThankYou from '@/components/shared/Form/ThankYou/ThankYou';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    const fields = {
      name,
      email,
      phone,
      message,
      appointmentDate,
    };
    await sendFormSubmission({ fields, formName: 'Appointment Request' });
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
      type: 'date',
      label: 'Preferred Appointment Date',
      id: 'appointmentDate',
      value: appointmentDate,
      handleChange: value => setAppointmentDate(value),
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
        To request an appointment, please fill out the form below, or email us
        at{' '}
        <CopyToClipboard text="info@geneviehealth.com">
          <span>info@geneviehealth.com</span>
        </CopyToClipboard>
        .
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
          heading="Appointment Request"
          TextElement={TextElement}
          loaderClassNames={styles.loader}
        />
      ) : (
        <ThankYou
          containerClassNames={styles.thankYouContainer}
          heading="Appointment request submitted"
        />
      )}
    </div>
  );
}
