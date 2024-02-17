import React from 'react';
import styles from './CheckboxCard.module.css';
import checkmarkIconSrc from '@assets/images/icon-checkmark.svg';

export type CheckboxCardProps = {
  id: string;
  label: string;
  description: string;
  monthlyPrice: number;
  isYearly: boolean;
  isChecked: boolean;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function CheckboxCard({
  id,
  label,
  description,
  monthlyPrice,
  isYearly,
  isChecked,
  value,
  handleChange,
}: CheckboxCardProps) {
  return (
    <label className={styles.card} htmlFor={value}>
      <input
        type='checkbox'
        id={id}
        className={styles.cardInput}
        value={value}
        onChange={handleChange}
        checked={isChecked}
      />
      <div className={styles.cardBody}>
        <div className={styles.cardCheckbox}>
          <img src={checkmarkIconSrc} />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.label}>{label}</div>
            <div className={styles.additionalInfo}>{description}</div>
          </div>
          <div className={styles.price}>
            {isYearly ? `+$${monthlyPrice * 10}/yr` : `+$${monthlyPrice}/mo`}
          </div>
        </div>
      </div>
    </label>
  );
}

export default CheckboxCard;
