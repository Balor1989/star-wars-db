import { Component } from "react";
import ApiService from "../../servises/ApiService";
import Spinner from "../Spinner";
import s from "./ItemDetails.module.css";

class ItemDetails extends Component {
  apiService = new ApiService();

  state = { item: null, visible: false, loading: false };

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
    return this.setState({ item: newPerson, visible: true, loading: false });
  };

  render() {
    const { item, visible, loading } = this.state;
    return (
      <div className={`${s.personBox} rounded`}>
        {!item && !loading && <h3>Select a person from a list</h3>}
        {loading && <Spinner />}
        {visible && (
          <div className={`${s.personDetails}`}>
            <img
              className={s.image}
              src={`https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`}
              onError={(e) =>
                (e.target.src = `https://starwars-visualguide.com/assets/img/placeholder.jpg`)
              }
              alt="person"
              width={200}
            />

            <div className="card-body">
              <h4>{item.name}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className={s.term}>Gender:</span>
                  <span className={s.description}>{item.gender}</span>
                </li>
                <li className="list-group-item">
                  <span className={s.term}>Birth Year:</span>
                  <span className={s.description}>{item.birthYear}</span>
                </li>
                <li className="list-group-item">
                  <span className={s.term}>Height:</span>
                  <span className={s.description}> {`${item.height} cm`}</span>
                </li>
                <li className="list-group-item">
                  <span className={s.term}>Mass:</span>
                  <span className={s.description}> {`${item.mass} kg`}</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default ItemDetails;
