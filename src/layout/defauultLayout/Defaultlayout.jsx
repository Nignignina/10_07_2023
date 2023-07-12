import styles from "./Defaultlayout.module.scss";
import Navbar from "../../Componets/Navbar";

const Deafaultlayout = ({ children }) => {
  return (
    <div className={styles.Defaultlayout}>
      <Navbar />
      {children}
      <p> hola</p>
    </div>
  );
};
export default Deafaultlayout;
