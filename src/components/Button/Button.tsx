import clsx from 'clsx';
import styles from './Button.module.css';

export type ButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'link';
  formId?: string;
  clickHandler?: () => void;
};

function Button({
  children,
  type,
  variant,
  formId,
  clickHandler,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(styles.button, variant && styles[variant])}
      form={formId}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

export default Button;
