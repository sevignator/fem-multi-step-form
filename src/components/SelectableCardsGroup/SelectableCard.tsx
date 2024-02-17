import styles from './SelectableCardsGroup.module.css';

export type SelectableCardProps = {
  children: React.ReactNode;
  groupName: string;
  value: string;
  selectedOption: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SelectableCard({
  children,
  groupName,
  value,
  selectedOption,
  handleChange,
}: SelectableCardProps) {
  return (
    <label
      key={value}
      htmlFor={`${groupName}-${value}`}
      className={styles.card}
    >
      <input
        type='radio'
        id={`${groupName}-${value}`}
        className={styles.cardInput}
        name={groupName}
        value={value}
        checked={selectedOption === value}
        onChange={handleChange}
      />
      <div className={styles.cardBody}>{children}</div>
    </label>
  );
}

export default SelectableCard;
