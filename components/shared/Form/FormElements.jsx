import styles from './Form.module.scss';
import { InputLabel, MenuItem, Select, TextareaAutosize } from '@mui/material';
import Input from '@/components/shared/Input/Input';
import { useState } from 'react';
import clsx from 'clsx';

export default function Form({
  type,
  label,
  id,
  value,
  handleChange,
  dropdownItems = [],
  placeholder = '',
  minRows = 1,
  required = false,
  maxWordCount = null,
  inputClassNames = '',
  labelClassNames = '',
  inputContainerClassNames = '',
}) {
  const [wordCount, setWordCount] = useState(0); // used for textarea
  const Label = ({ id, label }) => {
    return (
      <InputLabel className={clsx(styles.inputLabel, labelClassNames)} id={id}>
        {label}
        {required && <span className={styles.asterisk}>*</span>}
      </InputLabel>
    );
  };
  switch (type) {
    case 'dropdown':
      return (
        <div
          className={clsx(styles.formFieldContainer, inputContainerClassNames)}
        >
          <Label label={label} id={id} required={required} />
          <Select
            required={required}
            id={`${id}-label`}
            value={value}
            className={styles.dropdown}
            onChange={e => handleChange(e.target.value)}
          >
            {dropdownItems.map(item => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </div>
      );
    case 'text':
      return (
        <div
          className={clsx(styles.formFieldContainer, inputContainerClassNames)}
        >
          <Label label={label} id={id} required={required} />
          <Input
            handleChange={e => handleChange(e.target.value)}
            placeholder={placeholder}
            value={value}
            classNames={clsx(styles.input, inputClassNames)}
            required={required}
          />
        </div>
      );
    case 'textarea':
      return (
        <div className={styles.formFieldContainer}>
          <Label label={label} id={id} required={required} />
          <TextareaAutosize
            value={value}
            onChange={e => {
              setWordCount(e.target.value.split(' ').length);
              handleChange(e.target.value);
            }}
            minRows={minRows}
            className={styles.textarea}
            required={required}
          />
          {maxWordCount && (
            <p className={styles.wordCount}>
              {wordCount}/{maxWordCount}
            </p>
          )}
        </div>
      );
  }
}
