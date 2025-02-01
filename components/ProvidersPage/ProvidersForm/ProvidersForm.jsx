import { useState } from 'react';
import styles from './ProvidersForm.module.scss';
import Form from '../../shared/Form/Form';

export default function ProvidersForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    const fields = {
      name,
      email,
      phone,
      city,
      state,
      specialty,
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
      required: true,
    },
    {
      type: 'row',
      items: [
        {
          type: 'text',
          placeholder: 'City',
          id: 'city',
          value: city,
          handleChange: value => setCity(value),
        },
        {
          type: 'dropdown',
          placeholder: 'State',
          id: 'state',
          value: state,
          dropdownItems: [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'NewHampshire,',
            'NewJersey,',
            'NewMexico,',
            'NewYork,',
            'NorthCarolina,',
            'NorthDakota,',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'RhodeIsland,',
            'SouthCarolina,',
            'SouthDakota,',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'WestVirginia,',
            'Wisconsin',
            'Wyoming',
          ],

          handleChange: value => setState(value),
        },
      ],
    },
    {
      type: 'text',
      placeholder: 'Specialty',
      id: 'specialty',
      value: specialty,
      handleChange: value => setSpecialty(value),
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

  return (
    <div className={styles.container}>
      {!isSubmitted ? (
        <>
          <Form
            formConfig={formConfig}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            heading="How to get started"
            text="Please fill out the form below if you are a new referring provider and would like to learn more about how we can work with your practice."
            // inputClassNames={styles.input}
          />
          <p className={styles.disclaimer}>
            Please note: due to state licensure laws, we can accept patients who
            will physically be in the following states at the time of consult:
            Alaska, Arizona, California, Colorado, Illinois, Kansas, Maine,
            Mississippi, Missouri, Nevada, New York, North Carolina, South
            Carolina, Texas, West Virginia
          </p>
        </>
      ) : (
        <h2 className={styles.thankYou}>Thank you for your submission!</h2>
      )}
    </div>
  );
}
