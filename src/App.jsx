import { Component } from "react";
import Header from "./components/Header";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";
import s from "./App.module.css";
import ItemList from "./components/ItemList";
import PersonDetails from "./components/PersonDetails";
import ApiService from "./servises/ApiService";

export default class App extends Component {
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
      <div className={s.container}>
        <Header />
        <main className={s.mainContainer}>
          <RandomPlanet />
          <div className={`row mb2 ${s.renderBox}`}>
            <div className={`col-md-6 ${s.itemListBox}`}>
              <ItemList
                onItemSelected={this.personSelected}
                getItem={this.apiService.getAllPeople}
                renderItem={({ name, gender, birthYear }) =>
                  `${name} (${gender}, ${birthYear})`
                }
              />
            </div>
            <div className={`col-md-6 ${s.itemListBox}`}>
              <PersonDetails personId={this.state.personId} />
            </div>
          </div>
          <div className={`row mb2 ${s.renderBox}`}>
            <div className={`col-md-6 ${s.itemListBox}`}>
              <ItemList
                onItemSelected={this.personSelected}
                getItem={this.apiService.getAllPlanets}
                renderItem={({ name, diameter, climate }) =>
                  `${name} (${diameter} miles, ${climate})`
                }
              />
            </div>
            <div className={`col-md-6 ${s.itemListBox}`}>
              <PersonDetails personId={this.state.personId} />
            </div>
          </div>
          <div className={`row mb2 ${s.renderBox}`}>
            <div className={`col-md-6 ${s.itemListBox}`}>
              <ItemList
                onItemSelected={this.personSelected}
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
