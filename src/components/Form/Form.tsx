import React from 'react';
import styles from './Form.module.css';
import thankYouSrc from '@assets/images/icon-thank-you.svg';

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
  const [stepsSubmitted, setStepsSubmitted] = React.useState(
    steps.map(() => false)
  );
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  function changeActiveNumber(num: number) {
    if (num > 0 && num <= steps.length) {
      setActiveStepNumber(num);
    }
  }

  function changeStepSubmitted(index: number, isSubmitted: boolean) {
    const copy = [...stepsSubmitted];
    copy[index] = isSubmitted;
    setStepsSubmitted(copy);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className={styles.confirmationWrapper}>
        <div>
          <img src={thankYouSrc} alt='' />
        </div>
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    );
  }

  return (
    <>
      {isSubmitted ? (
        'Thank you'
      ) : (
        <form id={formId} className={styles.form} onSubmit={handleSubmit}>
          {steps.map((Step, index) => (
            <Step
              key={index}
              stepNumber={index + 1}
              activeStepNumber={activeStepNumber}
              stepSubmitted={stepsSubmitted[index]}
            />
          ))}
          <ButtonGroup
            formId={formId}
            activeStepNumber={activeStepNumber}
            maxStepNumber={steps.length}
            changeActiveNumber={changeActiveNumber}
            changeStepSubmitted={changeStepSubmitted}
          />
        </form>
      )}
    </>
  );
}

export default Form;
