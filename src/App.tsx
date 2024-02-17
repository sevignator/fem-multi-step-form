import React from 'react';
import './App.module.css';
import styles from './App.module.css';

import DataProvider from '@context/DataProvider';
import Steps from '@components/Steps';
import Form from '@components/Form';

function App() {
  const [activeStepNumber, setActiveStepNumber] = React.useState(1);
  const formId = React.useId();

  return (
    <DataProvider>
      <div className={styles.viewport}>
        <div className={styles.wrapper}>
          <aside className={styles.sidebar}>
            <Steps activeStepNumber={activeStepNumber} />
          </aside>
          <main className={styles.main}>
            <Form
              formId={formId}
              activeStepNumber={activeStepNumber}
              setActiveStepNumber={setActiveStepNumber}
            />
          </main>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
