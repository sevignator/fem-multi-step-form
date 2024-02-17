import React from 'react';
import styles from './Form.module.css';

import ButtonGroup from '@components/ButtonGroup';

import StepAddOns from '../FormStep/StepAddOns';
import StepInfo from '../FormStep/StepInfo';
import StepPlan from '../FormStep/StepPlan';
import StepSummary from '../FormStep/StepSummary';

export type FormProps = {
  formId: string;
  activeStepNumber: number;
  setActiveStepNumber: (num: number) => void;
};

function Form({ formId, activeStepNumber, setActiveStepNumber }: FormProps) {
  const steps = [StepInfo, StepPlan, StepAddOns, StepSummary];

  function changeActiveNumber(num: number) {
    if (num > 0 && num <= steps.length) {
      setActiveStepNumber(num);
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log('Form submitted');
  }

  return (
    <form id={formId} className={styles.form} onSubmit={handleSubmit}>
      {steps.map((Step, index) => (
        <Step
          key={index + 1}
          position={index + 1}
          activeStepNumber={activeStepNumber}
        />
      ))}
      <ButtonGroup
        formId={formId}
        activeStepNumber={activeStepNumber}
        maxStepNumber={steps.length}
        changeActiveNumber={changeActiveNumber}
      />
    </form>
  );
}

export default Form;
