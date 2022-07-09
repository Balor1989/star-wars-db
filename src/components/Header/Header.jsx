import s from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`d-flex align-items-center ${s.header}`}>
      <h1 className={s.headerTitle}>
        <a href="./index.html ">Star Wars</a>
      </h1>
      <nav>
        <ul className="d-flex">
          <li className={s.navItem}>
            <Link to="/people">People</Link>
          </li>
          <li className={s.navItem}>
            <Link to="/planets">Planets</Link>
          </li>
          <li className={s.navItem}>
            <Link to="/starships">Starships</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
