import { Component } from "react";
import Header from "./components/Header";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";
import s from "./App.module.css";
import ApiService from "./servises/ApiService";
import PeoplePage from "./views/PeoplePage";
import PlanetPage from "./views/PlanetPage";
import StarshipPage from "./views/StarshipPage";
import { ApiServiceProvider } from "./components/ApiServiceContext";

export default class App extends Component {
  apiService = new ApiService();

  state = {
    personId: null,
  };

  render() {
    return (
      <ApiServiceProvider value={this.apiService}>
        <div className={s.container}>
          <Header />
          <main className={s.mainContainer}>
            <RandomPlanet />
            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </main>
        </div>
      </ApiServiceProvider>
    );
  }
}
