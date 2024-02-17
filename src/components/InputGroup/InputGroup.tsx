import React from 'react';
import styles from './InputGroup.module.css';

export type InputGroupProps = {
  children: React.ReactNode;
};

function InputGroup({ children }: InputGroupProps) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default InputGroup;
