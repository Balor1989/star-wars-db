import { Component } from "react";
import Header from "./components/Header";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";
import s from "./App.module.css";
import ApiService from "./servises/ApiService";
import PeoplePage from "./views/PeoplePage";
import PlanetPage from "./views/PlanetPage";
import StarshipPage from "./views/StarshipPage";
import { ApiServiceProvider } from "./components/ApiServiceContext";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Message from "./components/Welcome";

export default class App extends Component {
  apiService = new ApiService();

  state = {
    personId: null,
  };

  render() {
    return (
      <ApiServiceProvider value={this.apiService}>
        <BrowserRouter>
          <div className={s.container}>
            <Header />
            <main className={s.mainContainer}>
              <RandomPlanet />
              <Routes>
                <Route exact path="/" element={<Message />} />
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/planets" element={<PlanetPage />} />
                <Route path="/starships" element={<StarshipPage />} />
                <Route path="*" element={<Message value="Page not found" />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ApiServiceProvider>
    );
  }
}
