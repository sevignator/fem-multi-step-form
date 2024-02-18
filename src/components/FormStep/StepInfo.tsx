import useDataContext from '@hooks/useDataContext';

import Description from '@components/Description';
import FormStep from '@components/FormStep';
import InputGroup from '@components/InputGroup';
import TextInput from '@components/TextInput';
import Title from '@components/Title';

export type StepInfoProps = {
  stepNumber: number;
  activeStepNumber: number;
  stepSubmitted: boolean;
};

function StepInfo({
  stepNumber,
  activeStepNumber,
  stepSubmitted,
}: StepInfoProps) {
  const { personalInfo, changePersonalInfo } = useDataContext();
  const { name, email, phone } = personalInfo;

  return (
    <FormStep stepNumber={stepNumber} activeStepNumber={activeStepNumber}>
      <Title>Personal info</Title>
      <Description>
        Please provide your name, email address, and phone number.
      </Description>

      <InputGroup>
        <TextInput
          label='Name'
          placeholder='e.g. Stephen King'
          required={true}
          isInvalid={stepSubmitted && name === ''}
          value={name}
          handleChange={(e) => changePersonalInfo('name', e?.target.value)}
        />
        <TextInput
          label='Email Address'
          placeholder='e.g. stephenking@lorem.com'
          required={true}
          isInvalid={stepSubmitted && email === ''}
          value={email}
          handleChange={(e) => changePersonalInfo('email', e?.target.value)}
        />
        <TextInput
          label='Phone Number'
          placeholder='e.g. +1 234 567 890'
          required={true}
          isInvalid={stepSubmitted && phone === ''}
          value={phone}
          handleChange={(e) => changePersonalInfo('phone', e?.target.value)}
        />
      </InputGroup>
    </FormStep>
  );
}

export default StepInfo;
