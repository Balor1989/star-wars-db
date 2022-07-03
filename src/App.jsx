import { Component } from "react";
import Header from "./components/Header";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";
import s from "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <div className={s.container}>
        <Header />
        <main className={s.mainContainer}>
          <RandomPlanet />
        </main>
      </div>
    );
  }
}
