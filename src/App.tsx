import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Select, Field } from "./components";
import { ISizeOption, ICell } from "./interfaces";

const numberOfSquares = [
  {
    name: "Easy",
    field: 5,
  },
  {
    name: "Normal",
    field: 15,
  },
  {
    name: "Hard",
    field: 25,
  },
];

function App() {
  const [sizeOptions, setSizeOptions] = useState<ISizeOption[]>([]);
  const [size, setSize] = useState<number>(0);
  const [selectedCells, setSelectedCells] = useState<ICell[]>([]);

  let selectedId: any = useRef("");

  useEffect(() => {
    setSizeOptions(numberOfSquares);
  }, []);

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(+e.target.value);
  };

  const onHover = (cell: ICell) => {
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

  return (
    <div className="App">
      <div className="leftContainer">
        <div className="selectButtonContainer">
          <div className="selectContainer">
            <Select
              options={sizeOptions}
              handleOptionChange={handleSizeChange}
            />
          </div>
          <button>START</button>
        </div>
        <div className="fieldContainer">
          <Field
            size={size}
            onCellHover={onHover}
            selectedCells={selectedCells}
            //onCellLeave={onCellLeave}
          />
        </div>
      </div>
      <div className="rightContainer">
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
    </div>
  );
}

export default App;
