import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.css";
import { ICell } from "../../interfaces";

interface IProps {
  size: number;
  selectedCells: ICell[];
  onCellHover: (cell: ICell) => void;
  onLeaveField: () => void;
  play: boolean;
}

const Field: React.FC<IProps> = ({
  size,
  selectedCells,
  onCellHover,
  onLeaveField,
  play,
}) => {
  const columns = Array.from({ length: 5 }).fill(" ");
  const rows = Array.from({ length: size / 5 }).fill(" ");

  const isSelected: (id: string) => boolean = (id: string) => {
    return selectedCells.find((cell) => cell.id === id) ? true : false;
  };

  const onMouseOver = (e: any) => {
    const id = JSON.stringify({
      row: e.target.closest("tr").rowIndex + 1,
      column: e.target.cellIndex + 1,
    });

    const cell = {
      row: e.target.closest("tr").rowIndex + 1,
      column: e.target.cellIndex + 1,
      id,
      selected: isSelected(id),
    };

    onCellHover(cell);
  };

  return (
    <div className={styles.fieldContainer}>
      {size > 0 && (
        <table
          onMouseOut={onLeaveField}
          onMouseOver={(e) => onMouseOver(e)}
          className={play ? styles.activeTable : ""}
        >
          <tbody>
            {rows.map((_, rowIndex) => (
              <tr key={uuidv4()}>
                {columns.map((_, columnIndex) => {
                  const id = JSON.stringify({
                    row: rowIndex + 1,
                    column: columnIndex + 1,
                  });

                  return (
                    <td
                      key={id}
                      className={isSelected(id) ? styles.selectedCell : ""}
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
