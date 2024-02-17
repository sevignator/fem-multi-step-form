import React from 'react';
import clsx from 'clsx';
import styles from './Steps.module.css';

export type StepProps = {
  children: React.ReactNode;
  position: number;
  activeStepNumber: number;
};

function Step({ children, position, activeStepNumber }: StepProps) {
  return (
    <li
      className={clsx(
        styles.step,
        position === activeStepNumber && styles.stepActive
      )}
    >
      <div className={styles.stepPosition}>{position}</div>
      <div className={styles.stepContent}>
        <span className={styles.stepHeader}>Step {position}</span>
        <span className={styles.stepText}>{children}</span>
      </div>
    </li>
  );
}

export default Step;
