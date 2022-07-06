import s from "./RecordRow.module.css";

const RecordRow = ({ item, value, label, ending = "" }) => {
  return (
    <li className="list-group-item">
      <span className={s.term}>{label}</span>
      <span className={s.description}>{`${item[value]} ${ending}`}</span>
    </li>
  );
};

export default RecordRow;
