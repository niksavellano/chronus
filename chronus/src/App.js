import "./App.css";
import Index from "./Component/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Index />
      </div>
    </BrowserRouter>
  );
}

export default App;
