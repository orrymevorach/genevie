import Button from '@/components/shared/Button/Button';
import GetFormElement from './FormElements';
import styles from './Form.module.scss';
import clsx from 'clsx';

export default function SubmissionForm({
  formConfig,
  handleSubmit = () => {},
  isLoading = false,
  formContainerClassNames = '',
  inputClassNames = '',
  labelClassNames = '',
  inputContainerClassNames = '',
  buttonClassNames = '',
}) {
  const handleSubmitForm = e => {
    e.preventDefault();
    handleSubmit();
  };

  return (
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
        isLoading={isLoading}
        isTertiary
      >
        Submit
      </Button>
    </form>
  );
}
