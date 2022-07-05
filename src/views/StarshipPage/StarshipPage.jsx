import { Component } from "react";
import ItemList from "../../components/ItemList";
import PersonDetails from "../../components/PersonDetails";
import ApiService from "../../servises/ApiService";
import s from "./StarshipPage.module.css";

class StarshipPage extends Component {
  apiService = new ApiService();

  state = {
    starshipId: null,
  };

  starshipSelected = (id) => {
    this.setState({
      starshipId: id,
    });
  };
  render() {
    return (
      <div className={`row mb2 ${s.renderBox}`}>
        <div className={`col-md-6 ${s.itemListBox}`}>
          <ItemList
            onItemSelected={this.starshipSelected}
            getItem={this.apiService.getAllStarships}
            renderItem={({ name, model }) => `${name} (${model})`}
          />
        </div>
        <div className={`col-md-6 ${s.itemListBox}`}>
          <PersonDetails personId={this.state.starshipId} />
        </div>
      </div>
    );
  }
}

export default StarshipPage;
