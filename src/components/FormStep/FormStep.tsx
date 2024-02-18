import clsx from 'clsx';
import styles from './FormStep.module.css';

export type FormStepProps = {
  children: React.ReactNode;
  stepNumber: number;
  activeStepNumber: number;
};

function FormStep({ children, stepNumber, activeStepNumber }: FormStepProps) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        stepNumber === activeStepNumber ? styles.visible : undefined
      )}
    >
      {children}
    </div>
  );
}

export default FormStep;
