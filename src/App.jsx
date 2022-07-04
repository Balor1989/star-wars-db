import { Component } from "react";
import Header from "./components/Header";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";
import s from "./App.module.css";
import ItemList from "./components/ItemList";

export default class App extends Component {
  render() {
    return (
      <div className={s.container}>
        <Header />
        <main className={s.mainContainer}>
          <RandomPlanet />
          <div className={`row mb2 ${s.itemListContainer}`}>
            <div className="col-md-6">
              <ItemList />
            </div>
            <div className="col-md-6">
              <ItemList />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
