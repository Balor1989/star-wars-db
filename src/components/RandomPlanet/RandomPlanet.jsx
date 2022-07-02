import { Component } from "react";
import ApiService from "../../servises/ApiService";

class RandomPlanet extends Component {
  apiService = new ApiService();

  state = {
    id: null,
    planet: {},
  };

  componentDidMount() {
    this.updatePlanet();
  }

  async updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    const planet = await this.apiService.getPlanet(id);
    return this.setState({ planet: planet, id: id });
  }

  render() {
    const { id, planet } = this.state;
    return (
      <div className="d-flex">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
          width={150}
        />
        <div>
          <h2>{planet.name}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <span>population:</span>
              <span>{` ${planet.population} people`}</span>
            </li>
            <li className="list-group-item">
              <span>rotationPeriod:</span>
              <span>{` ${planet.rotation_period} hours`}</span>
            </li>
            <li className="list-group-item">
              <span>diameter: </span>
              <span>{` ${planet.diameter} miles`}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default RandomPlanet;
