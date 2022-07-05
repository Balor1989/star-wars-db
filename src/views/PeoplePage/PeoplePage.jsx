import { Component } from "react";
import ItemList from "../../components/ItemList";
import PersonDetails from "../../components/PersonDetails";
import ApiService from "../../servises/ApiService";
import s from "./PeoplePage.module.css";

class PeoplePage extends Component {
  apiService = new ApiService();

  state = {
    personId: null,
  };

  personSelected = (id) => {
    this.setState({
      personId: id,
    });
  };
  render() {
    return (
      <div className={`row mb2 ${s.renderBox}`}>
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.personSelected}
            getItem={this.apiService.getAllPeople}
            renderItem={({ name, gender, birthYear }) =>
              `${name} (${gender}, ${birthYear})`
            }
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.personId} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
