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
  inputClassNames = '',
  labelClassNames = '',
  inputContainerClassNames = '',
  items = [],
}) {
  const Label = () => {
    return (
      <InputLabel className={clsx(styles.inputLabel, labelClassNames)} id={id}>
        {label}
        {required && <span className={styles.asterisk}>*</span>}
      </InputLabel>
    );
  };

  const placeholderWithAsterisk = `${placeholder}*`;

  switch (type) {
    case 'dropdown':
      return (
        <div
          className={clsx(
            styles.formFieldContainer,
            inputContainerClassNames,
            styles.pseudoBorderBottom
          )}
        >
          <Select
            required={required}
            id={`${id}-label`}
            value={value}
            className={styles.dropdown}
            onChange={e => handleChange(e.target.value)}
            displayEmpty
            sx={{
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiSelect-select': {
                padding: '0px', // Removes default padding
              },
            }}
          >
            <MenuItem value="" disabled>
              {placeholder || 'Select an option'}
            </MenuItem>
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
          <Input
            handleChange={e => handleChange(e.target.value)}
            placeholder={required ? placeholderWithAsterisk : placeholder}
            value={value}
            classNames={clsx(styles.input, inputClassNames)}
            required={required}
          />
        </div>
      );
    case 'textarea':
      return (
        <div
          className={clsx(styles.formFieldContainer, styles.pseudoBorderBottom)}
        >
          <Label label={label} id={id} required={required} />
          <TextareaAutosize
            value={value}
            onChange={e => {
              handleChange(e.target.value);
            }}
            minRows={minRows}
            className={styles.textarea}
            required={required}
          />
        </div>
      );
    case 'row':
      return (
        <div
          className={clsx(styles.row)}
          style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}
        >
          {items.map((item, index) => (
            <Form key={index} {...item} />
          ))}
        </div>
      );
  }
}
