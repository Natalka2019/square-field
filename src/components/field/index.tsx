import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.css";
import { ICell } from "../../interfaces";

interface IProps {
  size: number;
  selectedCells: ICell[];
  onCellHover: (cell: ICell) => void;
}

const Field: React.FC<IProps> = ({ size, selectedCells, onCellHover }) => {
  const columns = Array.from({ length: 5 }).fill(" ");
  const rows = Array.from({ length: size / 5 }).fill(" ");

  const isSelected: (id: string) => boolean = (id: string) => {
    return selectedCells.find((cell) => cell.id === id) ? true : false;
  };

  return (
    <div className={styles.fieldContainer}>
      {size && (
        <table>
          <tbody>
            {rows.map((_, rowIndex) => (
              <tr key={uuidv4()}>
                {columns.map((_, columnIndex) => {
                  const id = JSON.stringify({
                    row: rowIndex + 1,
                    column: columnIndex + 1,
                  });

                  const cell = {
                    row: rowIndex + 1,
                    column: columnIndex + 1,
                    id,
                    selected: isSelected(id),
                  };

                  return (
                    <td
                      key={id}
                      className={isSelected(id) ? styles.selectedCell : ""}
                      onMouseEnter={() => onCellHover(cell)}
                    ></td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Field;
