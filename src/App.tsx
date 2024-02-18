import React from 'react';
import './App.module.css';
import styles from './App.module.css';
import { stepComponents } from '@src/steps';

import DataProvider from '@context/DataProvider';
import Steps from '@components/Steps';
import Form from '@components/Form';
import ButtonGroup from '@components/ButtonGroup';

function App() {
  const [activeStepNumber, setActiveStepNumber] = React.useState(1);
  const [stepsSubmitted, setStepsSubmitted] = React.useState<boolean[]>(
    stepComponents.map(() => false)
  );
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const formId = React.useId();

  function changeStepSubmitted(index: number, isSubmitted: boolean) {
    const copy = [...stepsSubmitted];
    copy[index] = isSubmitted;
    setStepsSubmitted(copy);
  }

  function changeActiveNumber(num: number) {
    if (num > 0 && num <= stepComponents.length) {
      setActiveStepNumber(num);
    }
  }

  return (
    <DataProvider>
      <div className={styles.viewport}>
        <header className={styles.mobileHeader}>
          <Steps activeStepNumber={activeStepNumber} />
        </header>

        <div className={styles.wrapper}>
          <div className={styles.card}>
            <aside className={styles.sidebarLarge}>
              <Steps activeStepNumber={activeStepNumber} />
            </aside>
            <main className={styles.main}>
              <Form
                formId={formId}
                activeStepNumber={activeStepNumber}
                setActiveStepNumber={setActiveStepNumber}
                stepsSubmitted={stepsSubmitted}
                formSubmitted={formSubmitted}
                setFormSubmitted={setFormSubmitted}
              />
              {!formSubmitted && (
                <div className={styles.desktopFooter}>
                  <ButtonGroup
                    variant='large'
                    formId={formId}
                    activeStepNumber={activeStepNumber}
                    maxStepNumber={stepComponents.length}
                    changeActiveNumber={changeActiveNumber}
                    changeStepSubmitted={changeStepSubmitted}
                  />
                </div>
              )}
            </main>
          </div>
        </div>

        {!formSubmitted && (
          <footer className={styles.mobileFooter}>
            <div className={styles.wrapper}>
              <ButtonGroup
                variant='small'
                formId={formId}
                activeStepNumber={activeStepNumber}
                maxStepNumber={stepComponents.length}
                changeActiveNumber={changeActiveNumber}
                changeStepSubmitted={changeStepSubmitted}
              />
            </div>
          </footer>
        )}
      </div>
    </DataProvider>
  );
}

export default App;
