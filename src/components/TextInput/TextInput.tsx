import React from 'react';
import clsx from 'clsx';
import styles from './TextInput.module.css';

export type TextInputProps = {
  label: string;
  value: string;
  handleChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
};

function TextInput({
  label,
  value,
  handleChange,
  placeholder,
  required,
}: TextInputProps) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const inputId = React.useId();
  const [isInvalid, setIsInvalid] = React.useState(false);

  function handleInvalid(e) {
    const isValid = e.target.value !== '' || e.target.value !== undefined
    setIsInvalid(isValid);
  }

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
        ref={inputRef}
        id={inputId}
        className={clsx(styles.input, isInvalid && styles.invalid)}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => {
          handleChange(e);
          setIsInvalid(false);
        }}
        onInvalid={handleInvalid}
      />
    </div>
  );
}

export default TextInput;
