import clsx from 'clsx';
import styles from './FormStep.module.css';

export type FormStepProps = {
  children: React.ReactNode;
  position: number;
  activeStepNumber: number;
};

function FormStep({ children, position, activeStepNumber }: FormStepProps) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        position === activeStepNumber ? styles.visible : undefined
      )}
    >
      {children}
    </div>
  );
}

export default FormStep;
