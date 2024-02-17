import { PlanType } from '@context/DataProvider';
import useDataContext from '@hooks/useDataContext';
import styles from './FormStep.module.css';

import Description from '@components/Description';
import FormStep from '@components/FormStep';
import SelectableCardsGroup, {
  type CardOption,
} from '@components/SelectableCardsGroup';
import Switch from '@components/Switch';
import Title from '@components/Title';

export type StepPlanProps = {
  position: number;
  activeStepNumber: number;
};

function StepPlan({ position, activeStepNumber }: StepPlanProps) {
  const { planType, changePlanType, isYearly, toggleIsYearly } = useDataContext();
  const cardOptions: CardOption[] = [
    {
      label: 'Arcade',
      value: 'arcade',
      monthlyPrice: 9,
      imgSrc: '/src/assets/images/icon-arcade.svg',
    },
    {
      label: 'Advanced',
      value: 'advanced',
      monthlyPrice: 12,
      imgSrc: '/src/assets/images/icon-advanced.svg',
    },
    {
      label: 'Pro',
      value: 'pro',
      monthlyPrice: 15,
      imgSrc: '/src/assets/images/icon-pro.svg',
    },
  ];

  return (
    <FormStep position={position} activeStepNumber={activeStepNumber}>
      <Title>Select your plan</Title>
      <Description>
        You have the option of monthly or yearly billing.
      </Description>

      <SelectableCardsGroup
        groupName='plan'
        options={cardOptions}
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
