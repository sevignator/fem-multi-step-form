import React from 'react';
import clsx from 'clsx';
import styles from './TextInput.module.css';

export type TextInputProps = {
  label: string;
  value: string;
  handleChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  isInvalid?: boolean;
};

function TextInput({
  label,
  value,
  handleChange,
  placeholder,
  required,
  isInvalid,
}: TextInputProps) {
  const inputId = React.useId();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
        {isInvalid && (
          <span className={styles.message}>This field is required</span>
        )}
      </div>
      <input
        type='text'
        id={inputId}
        className={clsx(styles.input, isInvalid && styles.invalid)}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextInput;
