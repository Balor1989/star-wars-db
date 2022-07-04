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
              <span>male</span>
            </li>
            <li className="list-group-item">
              <span className={s.term}>Birth Year:</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className={s.term}>Height:</span>
              <span> 100</span>
            </li>
            <li className="list-group-item">
              <span className={s.term}>Mass:</span>
              <span> 60</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default PersonDetails;
