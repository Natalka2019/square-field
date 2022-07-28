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
  let play: any = useRef(false);

  useEffect(() => {
    setSizeOptions(numberOfSquares);
  }, []);

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(+e.target.value);
    selectedId.current = "";
    setSelectedCells([]);
    play.current = false;
  };

  const onStartClick = () => {
    selectedId.current = "";
    setSelectedCells([]);
    play.current = true;
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

  return (
    <div className="App">
      <main className="mainContainer">
        <div className="leftContainer">
          <div className="selectButtonContainer">
            <div className="selectContainer">
              <Select
                options={sizeOptions}
                handleOptionChange={handleSizeChange}
              />
            </div>
            <button onClick={onStartClick}>START</button>
          </div>
          <div className="fieldContainer">
            <Field
              size={size}
              onCellHover={onHover}
              selectedCells={selectedCells}
              onLeaveField={onLeaveField}
              play={play.current}
            />
          </div>
        </div>
        <div className="rightContainer">
          {selectedCells.length > 0 && (
            <ul>
              <h2>Hover squares</h2>
              {selectedCells.map((cell) => (
                <li key={cell.id}>
                  row {cell.row} col {cell.column}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
