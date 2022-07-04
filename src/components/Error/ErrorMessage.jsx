import StarIcon from "./death-star.png";
import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={s.errorBox}>
      <img src={StarIcon} alt="error icon" className={s.errorIcon} />
      <span>WARNING!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorMessage;
