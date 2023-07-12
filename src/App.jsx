import { useState } from "react";
import styles from "./App.module.scss";
import Navbar from "./Componets/Navbar";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.App}></div>
    </>
  );
}

export default App;
