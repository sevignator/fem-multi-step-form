import { PlanType } from '@context/DataProvider';
import useDataContext from '@hooks/useDataContext';
import styles from './FormStep.module.css';

import Description from '@components/Description';
import FormStep from '@components/FormStep';
import SelectableCardsGroup from '@components/SelectableCardsGroup';
import Switch from '@components/Switch';
import Title from '@components/Title';

export type StepPlanProps = {
  stepNumber: number;
  activeStepNumber: number;
  setActiveStepNumber: (num: number) => void;
  stepSubmitted: boolean;
};

function StepPlan({ stepNumber, activeStepNumber }: StepPlanProps) {
  const { planType, changePlanType, isYearly, toggleIsYearly } =
    useDataContext();

  return (
    <FormStep stepNumber={stepNumber} activeStepNumber={activeStepNumber}>
      <Title>Select your plan</Title>
      <Description>
        You have the option of monthly or yearly billing.
      </Description>

      <SelectableCardsGroup
        groupName='plan'
        selectedOption={planType}
        isYearly={isYearly}
        handleChange={(e) => changePlanType(e.target.value as PlanType)}
      />

      <div className={styles.switchWrapper}>
        <Switch
          leftLabel='Monthly'
          rightLabel='Yearly'
          isChecked={isYearly}
          handleChange={() => toggleIsYearly()}
        />
      </div>
    </FormStep>
  );
}

export default StepPlan;
