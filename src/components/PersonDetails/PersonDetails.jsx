import { Component } from "react";
import s from "./PersonDetails.module.css";

class PersonDetails extends Component {
  render() {
    return (
      <div className={`${s.personDetails} card `}>
        <img
          className={s.image}
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
          alt="person"
          width={200}
        />

        <div className="card-body">
          <h4>R2-D2</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className={s.term}>Gender:</span>
              <span className={s.description}>male</span>
            </li>
            <li className="list-group-item">
              <span className={s.term}>Birth Year:</span>
              <span className={s.description}>43</span>
            </li>
            <li className="list-group-item">
              <span className={s.term}>Height:</span>
              <span className={s.description}> 100 sm</span>
            </li>
            <li className="list-group-item">
              <span className={s.term}>Mass:</span>
              <span className={s.description}> 60 kg</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default PersonDetails;
