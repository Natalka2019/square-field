import "./App.css";
import { ErrorBoundary } from "./components";
import { GamePage } from "./Pages";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <GamePage />
      </div>
    </ErrorBoundary>
  );
}

export default App;
