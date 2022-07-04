import { Component } from "react";
import ApiService from "../../servises/ApiService";
import Spinner from "../Spinner";
import s from "./PersonDetails.module.css";

class PersonDetails extends Component {
  apiService = new ApiService();

  state = { person: null, visible: false, loading: false };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson = async () => {
    this.setState({ visible: false, loading: true });
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    const newPerson = await this.apiService.getPerson(personId);
    return this.setState({ person: newPerson, visible: true, loading: false });
  };

  render() {
    const { person, visible, loading } = this.state;
    return (
      <>
        {!person && (
          <div className={`${s.noPerson} card `}>
            <h3>Select a person from a list</h3>
          </div>
        )}
        {loading && person && <Spinner />}
        {visible && (
          <div className={`${s.personDetails} card `}>
            <img
              className={s.image}
              src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
              onError={(e) =>
                (e.target.src = `https://starwars-visualguide.com/assets/img/placeholder.jpg`)
              }
              alt="person"
              width={200}
            />

            <div className="card-body">
              <h4>{person.name}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className={s.term}>Gender:</span>
                  <span className={s.description}>{person.gender}</span>
                </li>
                <li className="list-group-item">
                  <span className={s.term}>Birth Year:</span>
                  <span className={s.description}>{person.birthYear}</span>
                </li>
                <li className="list-group-item">
                  <span className={s.term}>Height:</span>
                  <span className={s.description}>
                    {" "}
                    {`${person.height} cm`}
                  </span>
                </li>
                <li className="list-group-item">
                  <span className={s.term}>Mass:</span>
                  <span className={s.description}> {`${person.mass} kg`}</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default PersonDetails;
