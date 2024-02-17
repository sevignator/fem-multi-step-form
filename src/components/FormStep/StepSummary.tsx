import Description from '@components/Description';
import FormStep from '@components/FormStep';
import Title from '@components/Title';

type StepSummaryProps = {
  position: number;
  activeStepNumber: number;
};

function StepSummary({ position, activeStepNumber }: StepSummaryProps) {
  return (
    <FormStep position={position} activeStepNumber={activeStepNumber}>
      <Title>Finishing up</Title>
      <Description>
        Double-check everything looks OK before confirming.
      </Description>
    </FormStep>
  );
}

export default StepSummary;
