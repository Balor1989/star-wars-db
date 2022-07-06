import s from "./Record.module.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className={s.term}>{label}</span>
      <span className={s.description}>{item[field]}</span>
    </li>
  );
};

export default Record;
