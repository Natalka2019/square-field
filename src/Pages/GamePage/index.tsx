import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { Select, Field } from "../../components";
import { ISizeOption, ICell } from "../../interfaces";

const GamePage: React.FC = () => {
  const [sizeOptions, setSizeOptions] = useState<ISizeOption[]>([]);
  const [size, setSize] = useState<number>(0);
  const [selectedCells, setSelectedCells] = useState<ICell[]>([]);
  const [hasError, setError] = useState(false);

  let selectedId: any = useRef("");
  let play: any = useRef(false);

  const getModeOptions = async () => {
    setError(false);
    try {
      const response = await fetch("https://demo7919674.mockable.io");
      const data = await response.json();

      setSizeOptions(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getModeOptions();
  }, []);

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(+e.target.value);
    setSelectedCells([]);

    play.current = false;
    selectedId.current = "";
  };

  const onStartClick = () => {
    setSelectedCells([]);

    play.current = true;
    selectedId.current = "";
  };

  const onHover = (cell: ICell) => {
    if (play.current === false) {
      return;
    }

    if (!cell.selected && cell.id !== selectedId.current) {
      const updatedSelection = [...selectedCells, cell];

      setSelectedCells(updatedSelection);

      selectedId.current = cell.id;
    } else if (cell.selected && cell.id !== selectedId.current) {
      const updatedSelection = selectedCells.filter((el) => el.id !== cell.id);

      setSelectedCells(updatedSelection);

      selectedId.current = cell.id;
    } else {
      return;
    }
  };

  const onLeaveField = () => {
    selectedId.current = "";
  };

  if (hasError) throw new Error();

  return (
    <main className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.selectButtonContainer}>
          <div className={styles.selectContainer}>
            <Select
              options={sizeOptions}
              handleOptionChange={handleSizeChange}
            />
          </div>
          <button onClick={onStartClick}>START</button>
        </div>
        <div className={styles.fieldContainer}>
          <Field
            size={size}
            onCellHover={onHover}
            selectedCells={selectedCells}
            onLeaveField={onLeaveField}
            play={play.current}
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h2>Hover squares</h2>
        {selectedCells.length > 0 && (
          <ul>
            {selectedCells.map((cell) => (
              <li key={cell.id}>
                row {cell.row} col {cell.column}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default GamePage;
