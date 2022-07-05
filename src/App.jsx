import { Component } from "react";
import Header from "./components/Header";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";
import s from "./App.module.css";
import ItemList from "./components/ItemList";
import PersonDetails from "./components/PersonDetails";
import ApiService from "./servises/ApiService";
import PeoplePage from "./views/PeoplePage";
import PlanetPage from "./views/PlanetPage";

export default class App extends Component {
  apiService = new ApiService();

  state = {
    personId: null,
  };

  render() {
    return (
      <div className={s.container}>
        <Header />
        <main className={s.mainContainer}>
          <RandomPlanet />
          <PeoplePage />
          <PlanetPage />

          <div className={`row mb2 ${s.renderBox}`}>
            <div className={`col-md-6 ${s.itemListBox}`}>
              <ItemList
                // onItemSelected={this.personSelected}
                getItem={this.apiService.getAllStarships}
                renderItem={({ name, model }) => `${name} (${model})`}
              />
            </div>
            <div className={`col-md-6 ${s.itemListBox}`}>
              <PersonDetails personId={this.state.personId} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
