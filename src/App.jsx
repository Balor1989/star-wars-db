import { Component } from "react";
import Header from "./components/Header";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";
import s from "./App.module.css";
import ItemList from "./components/ItemList";
import PersonDetails from "./components/PersonDetails";

export default class App extends Component {
  state = {
    personId: 1,
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
              <ItemList onPersonSelected={this.personSelected} />
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
