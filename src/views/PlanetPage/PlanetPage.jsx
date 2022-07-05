import { Component } from "react";
import ItemList from "../../components/ItemList";
import PersonDetails from "../../components/PersonDetails";
import ApiService from "../../servises/ApiService";
import s from "./PlanetPage.module.css";

class PlanetPage extends Component {
  apiService = new ApiService();

  state = {
    planetId: null,
  };

  planetSelected = (id) => {
    this.setState({
      planetId: id,
    });
  };
  render() {
    return (
      <div className={`row mb2 ${s.renderBox}`}>
        <div className={`col-md-6 ${s.itemListBox}`}>
          <ItemList
            onItemSelected={this.planetSelected}
            getItem={this.apiService.getAllPlanets}
            renderItem={({ name, diameter, climate }) =>
              `${name} (${diameter} miles, ${climate})`
            }
          />
        </div>
        <div className={`col-md-6 ${s.itemListBox}`}>
          <PersonDetails personId={this.state.planetId} />
        </div>
      </div>
    );
  }
}

export default PlanetPage;
