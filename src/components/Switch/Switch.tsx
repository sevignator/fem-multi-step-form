import styles from './Switch.module.css';

export type SwitchProps = {
  leftLabel: string;
  rightLabel: string;
  isChecked: boolean;
  handleChange: () => void;
};

function Switch({
  leftLabel,
  rightLabel,
  isChecked,
  handleChange,
}: SwitchProps) {
  return (
    <label className={styles.wrapper} htmlFor='frequency'>
      <span className={styles.leftLabel}>{leftLabel}</span>
      <div className={styles.switch}>
        <input
          id='frequency'
          className={styles.checkbox}
          type='checkbox'
          checked={isChecked}
          onChange={handleChange}
        />
        <div className={styles.toggleOuter}>
          <div className={styles.toggleInner}></div>
        </div>
      </div>
      <span className={styles.rightLabel}>{rightLabel}</span>
    </label>
  );
}

export default Switch;
