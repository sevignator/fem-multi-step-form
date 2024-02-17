import React from 'react';
import styles from './SelectableCardsGroup.module.css';

import SelectableCard from './SelectableCard';

export type SelectableCardsGroupProps = {
  groupName: string;
  options: CardOption[];
  selectedOption: string;
  isYearly: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CardOption = {
  label: string;
  value: string;
  monthlyPrice: number;
  imgSrc: string;
};

function SelectableCardsGroup({
  groupName,
  options,
  selectedOption,
  isYearly,
  handleChange,
}: SelectableCardsGroupProps) {
  return (
    <div className={styles.wrapper}>
      {options.map(({ label, value, monthlyPrice, imgSrc }) => (
        <SelectableCard
          key={value}
          groupName={groupName}
          value={value}
          selectedOption={selectedOption}
          handleChange={handleChange}
        >
          <img src={imgSrc} alt='' className={styles.icon} />
          <div className={styles.cardContent}>
            <div className={styles.label}>{label}</div>
            <div className={styles.price}>
              {isYearly ? `$${monthlyPrice * 10}/yr` : `$${monthlyPrice}/mo`}
            </div>
            {isYearly && (
              <div className={styles.additionalInfo}>2 months free</div>
            )}
          </div>
        </SelectableCard>
      ))}
    </div>
  );
}

export default SelectableCardsGroup;
