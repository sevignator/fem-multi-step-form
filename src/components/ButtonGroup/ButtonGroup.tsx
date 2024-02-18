import styles from './ButtonGroup.module.css';
import useDataContext from '../../hooks/useDataContext';

import Button from '@components/Button';

export type ButtonGroupProps = {
  formId: string;
  activeStepNumber: number;
  maxStepNumber: number;
  changeActiveNumber: (num: number) => void;
  changeStepSubmitted: (index: number, isSubmitted: boolean) => void;
};

function ButtonGroup({
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
    <div className={styles.group}>
      <div>
        {activeStepNumber > 1 && (
          <Button type='button' variant='link' clickHandler={goToPreviousStep}>
            Go Back
          </Button>
        )}
      </div>

      <div>
        {activeStepNumber < maxStepNumber && (
          <Button type='button' variant='secondary' clickHandler={goToNextStep}>
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
