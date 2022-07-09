import s from "./Message.module.css";
import PropTypes from "prop-types";

const Message = ({ value = "Welcome to Star Wars DB" }) => {
  return (
    <div className={`${s.container} rounded`}>
      <h2>{value}</h2>
    </div>
  );
};

export default Message;

Message.propTypes = {
  value: PropTypes.string,
};
