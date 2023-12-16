import styles from "../styles/Landing.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className={styles.container}>
      <p>Bienvenidos a la pagina, donde se muestran los posteos de diferentes usuarios</p>
      <b/>
      <Link to="/posteos">Ver los posteos</Link>
    </div>
  )
}