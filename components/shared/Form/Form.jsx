import Button from '@/components/shared/Button/Button';
import GetFormElement from './FormElements';
import styles from './Form.module.scss';
import clsx from 'clsx';
import Loader from '../Loader/Loader';

const Heading = ({ heading, text }) => {
  return (
    <div className={styles.textContainer}>
      <h3 className={styles.title}>{heading}</h3>
      <p className={styles.description}>{text}</p>
    </div>
  );
};

export default function SubmissionForm({
  formConfig,
  handleSubmit = () => {},
  isLoading = false,
  formContainerClassNames = '',
  inputClassNames = '',
  labelClassNames = '',
  inputContainerClassNames = '',
  buttonClassNames = '',
  heading,
  text,
}) {
  const handleSubmitForm = e => {
    e.preventDefault();
    handleSubmit();
  };

  if (isLoading)
    return (
      <div className={styles.container}>
        <Heading heading={heading} text={text} />
        <Loader />
      </div>
    );

  return (
    <>
      <Heading heading={heading} text={text} />
      <form
        action="#"
        className={clsx(styles.container, formContainerClassNames)}
        onSubmit={handleSubmitForm}
      >
        {formConfig.map((elementConfig, index) => {
          return (
            <GetFormElement
              key={`${index}-submission-form`}
              {...elementConfig}
              inputClassNames={inputClassNames}
              labelClassNames={labelClassNames}
              inputContainerClassNames={inputContainerClassNames}
            />
          );
        })}

        <Button
          classNames={clsx(styles.submitButton, buttonClassNames)}
          isTertiary
        >
          Submit
        </Button>
      </form>
    </>
  );
}
