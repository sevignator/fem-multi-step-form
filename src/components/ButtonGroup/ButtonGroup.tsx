import clsx from 'clsx';

import styles from './ButtonGroup.module.css';
import useDataContext from '../../hooks/useDataContext';

import Button from '@components/Button';

export type ButtonGroupProps = {
  variant: 'small' | 'large';
  formId: string;
  activeStepNumber: number;
  maxStepNumber: number;
  changeActiveNumber: (num: number) => void;
  changeStepSubmitted: (index: number, isSubmitted: boolean) => void;
};

function ButtonGroup({
  variant,
  formId,
  activeStepNumber,
  maxStepNumber,
  changeActiveNumber,
  changeStepSubmitted,
}: ButtonGroupProps) {
  const { personalInfo } = useDataContext();
  const { name, email, phone } = personalInfo;

  function goToNextStep() {
    if (activeStepNumber === 1) {
      if (name === '' || email === '' || phone === '') {
        changeStepSubmitted(activeStepNumber - 1, true);
        return;
      }
    }

    changeActiveNumber(activeStepNumber + 1);
  }

  function goToPreviousStep() {
    changeActiveNumber(activeStepNumber - 1);
  }

  return (
    <div
      className={clsx(
        styles.group,
        variant === 'small' && styles.groupSmall,
        variant === 'large' && styles.groupLarge
      )}
    >
      <div>
        {activeStepNumber > 1 && (
          <Button type='button' variant='link' clickHandler={goToPreviousStep}>
            Go Back
          </Button>
        )}
      </div>

      <div>
        {activeStepNumber < maxStepNumber && (
          <Button
            type='submit'
            variant='secondary'
            clickHandler={goToNextStep}
            formId={formId}
          >
            Next Step
          </Button>
        )}
        {activeStepNumber === maxStepNumber && (
          <Button type='submit' variant='primary' formId={formId}>
            Confirm
          </Button>
        )}
      </div>
    </div>
  );
}

export default ButtonGroup;
