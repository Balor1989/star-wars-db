import s from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const activeLink = ({ isActive }) =>
    isActive ? `${s.link} ${s.activeLink}` : s.link;
  return (
    <header className={`d-flex align-items-center ${s.header}`}>
      <h1 className={s.headerTitle}>
        <Link to="/">Star Wars</Link>
      </h1>
      <nav>
        <ul className="d-flex">
          <li className={s.navItem}>
            <NavLink to="/people" className={activeLink}>
              People
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to="/planets" className={activeLink}>
              Planets
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to="/starships" className={activeLink}>
              Starships
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
