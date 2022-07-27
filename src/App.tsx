import { useState, useEffect } from "react";
import "./App.css";
import Select from "./components/select";
import { ISizeOption } from "./interfaces";

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
  const [size, setSize] = useState<ISizeOption | null>(null);

  useEffect(() => {
    setSizeOptions(numberOfSquares);
  }, []);

  console.log(sizeOptions);

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <div className="selectContainer">
        <Select options={sizeOptions} handleOptionChange={handleSizeChange} />
      </div>
    </div>
  );
}

export default App;
