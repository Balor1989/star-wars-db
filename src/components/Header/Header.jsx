import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={`d-flex align-items-center ${s.header}`}>
      <h1 className={s.headerTitle}>
        <a href="./index.html ">Star Wars</a>
      </h1>
      <nav>
        <ul className="d-flex">
          <li className={s.navItem}>People</li>
          <li className={s.navItem}>Planets</li>
          <li className={s.navItem}>Starships</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
