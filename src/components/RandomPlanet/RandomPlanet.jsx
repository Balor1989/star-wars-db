import { Component } from "react";
import ApiService from "../../servises/ApiService";

class RandomPlanet extends Component {
  apiService = new ApiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  };
  constructor() {
    super();
    this.updatePlanet();
  }
  loadingPlanet(planet) {
    this.setState({
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      id: planet.id,
    });
  }

  async updatePlanet() {
    const id = 10;
    const planet = await this.apiService.getPlanet(id);
    return this.loadingPlanet(planet);
  }

  render() {
    const { id, population, rotationPeriod, diameter, name } = this.state;
    return (
      <div>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/2.jpg`}
          alt=""
        />
        <div>
          <h2>{name}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <span>population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span>rotationPeriod</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span>diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default RandomPlanet;
