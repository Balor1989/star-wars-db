import s from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={`${s.container} rounded`}>
      <h2>Welcome to Star Wars database</h2>
    </div>
  );
};

export default Welcome;
