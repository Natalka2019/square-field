import styles from "./styles.module.css";
import { ISizeOption } from "../../interfaces";

interface IProps {
  options: ISizeOption[];
  handleOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<IProps> = ({ options, handleOptionChange }) => {
  return (
    <div className={styles.selectContainer}>
      <select
        name="select"
        defaultValue="DEFAULT"
        onChange={(e) => handleOptionChange(e)}
      >
        <option value="DEFAULT" disabled>
          Pick mode
        </option>
        {options.map((option) => {
          return (
            <option key={option.field} value={option.field}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
