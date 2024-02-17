import React from 'react';
import styles from './Description.module.css';

export type DescriptionProps = {
  children: React.ReactNode;
};

function Description({ children }: DescriptionProps) {
  return <p className={styles.description}>{children}</p>;
}

export default Description;
