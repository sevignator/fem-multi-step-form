import StepInfo from '@components/FormStep/StepInfo';
import StepPlan from '@components/FormStep/StepPlan';
import StepAddOns from '@components/FormStep/StepAddOns';
import StepSummary from '@components/FormStep/StepSummary';

export type StepsType = typeof stepComponents;

export const stepComponents = [StepInfo, StepPlan, StepAddOns, StepSummary];
