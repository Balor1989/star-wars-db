import s from "./RecordRow.module.css";
import PropTypes from "prop-types";

const RecordRow = ({ item, value, label, ending = "" }) => {
  return (
    <li className="list-group-item">
      <span className={s.term}>{label}</span>
      <span className={s.description}>{`${item[value]} ${ending}`}</span>
    </li>
  );
};

export default RecordRow;

RecordRow.propTypes = {
  item: PropTypes.object,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  ending: PropTypes.string,
};
