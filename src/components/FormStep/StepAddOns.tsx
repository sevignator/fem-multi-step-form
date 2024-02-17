import { AddOns } from '@context/DataProvider';
import useDataContext from '@hooks/useDataContext';

import CheckboxCard from '@components/CheckboxCard';
import Description from '@components/Description';
import FormStep from '@components/FormStep';
import Title from '@components/Title';

export type StepAddOnsProps = {
  position: number;
  activeStepNumber: number;
};

export type AddOnOption = {
  label: string;
  value: string;
  description: string;
  monthlyPrice: number;
};

function StepAddOns({ position, activeStepNumber }: StepAddOnsProps) {
  const { addOns, toggleAddOn, isYearly } = useDataContext();
  const addOnOptions: AddOnOption[] = [
    {
      label: 'Online service',
      value: 'online-service',
      description: 'Access to multiplayer games',
      monthlyPrice: 1,
    },
    {
      label: 'Larger storage',
      value: 'larger-storage',
      description: 'Extra 1TB of cloud storage',
      monthlyPrice: 2,
    },
    {
      label: 'Customizable profile',
      value: 'customizable-profile',
      description: 'Custom theme on your profile',
      monthlyPrice: 2,
    },
  ];

  return (
    <FormStep position={position} activeStepNumber={activeStepNumber}>
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
