import { Component } from "react";
import ApiService from "../../servises/ApiService";
import Spinner from "../Spinner";

class RandomPlanet extends Component {
  apiService = new ApiService();

  state = {
    planet: {},
    loading: true,
    visible: false,
  };

  componentDidMount() {
    this.updatePlanet();
  }

  async updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    const planet = await this.apiService.getPlanet(id);
    return this.setState({ planet: planet, loading: false, visible: true });
  }

  render() {
    const {
      planet: { id, population, rotationPeriod, diameter, name },
      loading,
      visible,
    } = this.state;

    return (
      <div className="d-flex">
        {loading && <Spinner />}
        {visible && (
          <>
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
          </>
        )}
      </div>
    );
  }
}
export default RandomPlanet;
