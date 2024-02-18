import { addOnOptions } from '@src/data.ts';
import { type AddOns } from '@context/DataProvider';
import useDataContext from '@hooks/useDataContext';

import CheckboxCard from '@components/CheckboxCard';
import Description from '@components/Description';
import FormStep from '@components/FormStep';
import Title from '@components/Title';

export type StepAddOnsProps = {
  stepNumber: number;
  activeStepNumber: number;
  stepSubmitted: boolean;
};

function StepAddOns({ stepNumber, activeStepNumber }: StepAddOnsProps) {
  const { addOns, toggleAddOn, isYearly } = useDataContext();

  return (
    <FormStep stepNumber={stepNumber} activeStepNumber={activeStepNumber}>
      <Title>Pick add-ons</Title>
      <Description>Add-ons help enhance your gaming experience.</Description>

      {addOnOptions.map((option) => (
        <CheckboxCard
          key={option.value}
          id={option.value}
          label={option.label}
          description={option.description}
          monthlyPrice={option.monthlyPrice}
          isYearly={isYearly}
          value={option.value}
          handleChange={(e) => toggleAddOn(e.target.value as keyof AddOns)}
          isChecked={addOns[option.value as keyof AddOns]}
        />
      ))}
    </FormStep>
  );
}

export default StepAddOns;
