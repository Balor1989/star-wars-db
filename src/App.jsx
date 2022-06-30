import { Component } from "react";
import Header from "./components/Header";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <RandomPlanet />
        </main>
      </div>
    );
  }
}
