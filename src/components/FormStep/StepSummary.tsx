import clsx from 'clsx';
import styles from './FormStep.module.css';

import { type PlanOption, addOnOptions, planOptions } from '@src/data.ts';
import { type AddOns } from '@context/DataProvider';
import useDataContext from '@hooks/useDataContext';

import Description from '@components/Description';
import FormStep from '@components/FormStep';
import Title from '@components/Title';

type StepSummaryProps = {
  stepNumber: number;
  activeStepNumber: number;
  setActiveStepNumber: (num: number) => void;
  stepSubmitted: boolean;
};

function StepSummary({
  stepNumber,
  activeStepNumber,
  setActiveStepNumber,
}: StepSummaryProps) {
  const { planType, addOns, isYearly } = useDataContext();
  const selectedPlan = planOptions.find(
    (option) => option.value === planType
  ) as PlanOption;
  const selectedAddOns = addOnOptions.filter(
    (option) => addOns[option.value as keyof AddOns]
  );
  const totalMonthlyPrice =
    selectedPlan.monthlyPrice +
    selectedAddOns.reduce((total, current) => total + current.monthlyPrice, 0);

  function handleClick() {
    setActiveStepNumber(2);
    console.log('Test');
  }

  return (
    <FormStep stepNumber={stepNumber} activeStepNumber={activeStepNumber}>
      <Title>Finishing up</Title>
      <Description>
        Double-check everything looks OK before confirming.
      </Description>

      <div className={styles.summaryWrapper}>
        <dl>
          <div className={styles.summaryOptions}>
            <div className={clsx(styles.summaryEntry, styles.summaryPlan)}>
              <dt>
                <div className={styles.label}>
                  {selectedPlan.label} ({isYearly ? 'Yearly' : 'Monthly'})
                </div>
                <button
                  type='button'
                  className={styles.changeButton}
                  onClick={handleClick}
                >
                  Change
                </button>
              </dt>
              <dd className={styles.price}>
                {isYearly
                  ? `$${selectedPlan.monthlyPrice * 10}/yr`
                  : `$${selectedPlan.monthlyPrice}/mo`}
              </dd>
            </div>
            {selectedAddOns.length > 0 && (
              <div className={clsx(styles.summaryAddOns)}>
                {selectedAddOns.map((addOn) => (
                  <div
                    key={addOn.value}
                    className={clsx(styles.summaryEntry, styles.summaryAddOn)}
                  >
                    <dt className={styles.label}>{addOn.label}</dt>
                    <dd className={styles.price}>
                      {isYearly
                        ? `+$${addOn.monthlyPrice * 10}/yr`
                        : `+$${addOn.monthlyPrice}/mo`}
                    </dd>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={clsx(styles.summaryEntry, styles.summaryTotal)}>
            <dt className={styles.label}>
              Total (per {isYearly ? 'year' : 'month'})
            </dt>
            <dd className={styles.price}>
              {isYearly
                ? `+$${totalMonthlyPrice * 10}/yr`
                : `+$${totalMonthlyPrice}/mo`}
            </dd>
          </div>
        </dl>
      </div>
    </FormStep>
  );
}

export default StepSummary;
