import { Component } from "react";
import ApiService from "../../servises/ApiService";

class RandomPlanet extends Component {
  apiService = new ApiService();

  state = {
    planet: {},
  };

  componentDidMount() {
    this.updatePlanet();
  }

  async updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    const planet = await this.apiService.getPlanet(id);
    return this.setState({ planet: planet });
  }

  render() {
    const { id, population, rotationPeriod, diameter, name } =
      this.state.planet;

    return (
      <div className="d-flex">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
          width={150}
        />
        <div>
          <h2>{name}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <span>population:</span>
              <span>{` ${population} people`}</span>
            </li>
            <li className="list-group-item">
              <span>rotationPeriod:</span>
              <span>{` ${rotationPeriod} hours`}</span>
            </li>
            <li className="list-group-item">
              <span>diameter: </span>
              <span>{` ${diameter} miles`}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default RandomPlanet;
