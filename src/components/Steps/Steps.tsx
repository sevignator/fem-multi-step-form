import styles from './Steps.module.css';

import Step from './Step';

export type StepsProps = {
  activeStepNumber: number;
};

function Steps({ activeStepNumber }: StepsProps) {
  return (
    <ul className={styles.stepsList}>
      <Step position={1} activeStepNumber={activeStepNumber}>
        Your info
      </Step>
      <Step position={2} activeStepNumber={activeStepNumber}>
        Select plan
      </Step>
      <Step position={3} activeStepNumber={activeStepNumber}>
        Add-ons
      </Step>
      <Step position={4} activeStepNumber={activeStepNumber}>
        Summary
      </Step>
    </ul>
  );
}

export default Steps;
