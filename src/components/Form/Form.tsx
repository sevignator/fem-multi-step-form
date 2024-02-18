import React from 'react';
import styles from './Form.module.css';
import { stepComponents } from '@src/steps';

import iconThankYouSrc from '@assets/images/icon-thank-you.svg';

export type FormProps = {
  formId: string;
  activeStepNumber: number;
  setActiveStepNumber: (num: number) => void;
  stepsSubmitted: boolean[];
  formSubmitted: boolean;
  setFormSubmitted: (isSubmitted: boolean) => void;
};

function Form({
  formId,
  activeStepNumber,
  setActiveStepNumber,
  stepsSubmitted,
  formSubmitted,
  setFormSubmitted,
}: FormProps) {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log('Submitting');

    if (activeStepNumber === 4) {
      setFormSubmitted(true);
    }
  }

  if (formSubmitted) {
    return (
      <div className={styles.confirmationWrapper}>
        <div>
          <img src={iconThankYouSrc} alt='' />
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
      {formSubmitted ? (
        'Thank you'
      ) : (
        <form id={formId} className={styles.form} onSubmit={handleSubmit}>
          {stepComponents.map((Step, index) => (
            <Step
              key={index}
              stepNumber={index + 1}
              activeStepNumber={activeStepNumber}
              setActiveStepNumber={setActiveStepNumber}
              stepSubmitted={stepsSubmitted[index]}
            />
          ))}
        </form>
      )}
    </>
  );
}

export default Form;
