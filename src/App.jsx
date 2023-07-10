import { useState } from "react";
import Navbar from "./Componets/Navbar";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="Navbar"> Sono una navbar</div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
