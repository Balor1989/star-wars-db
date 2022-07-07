import { Component } from "react";
import ApiService from "../../servises/ApiService";
import ErrorMessage from "../Error";
import Spinner from "../Spinner";
import s from "./RandomPlanet.module.css";

class RandomPlanet extends Component {
  apiService = new ApiService();

  static defaultProps = { updateInterval: 10000 };

  state = {
    planet: {},
    loading: true,
    visible: false,
    error: false,
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updatePlanet = async () => {
    try {
      this.setState({ loading: true, visible: false });
      const id = Math.floor(Math.random() * 20 + 1);
      const planet = await this.apiService.getPlanet(id);
      return this.setState({
        planet: planet,
        loading: false,
        visible: true,
      });
    } catch (err) {
      this.setState({ error: true, loading: false });
    }
  };

  render() {
    const {
      planet: { id, population, rotationPeriod, diameter, name, climate },
      loading,
      visible,
      error,
    } = this.state;

    return (
      <div className={`${s.randomPlanet} rounded`}>
        {error && !visible && <ErrorMessage />}
        {loading && <Spinner />}
        {visible && (
          <div className={s.planetContainer}>
            <img
              className={s.planetImage}
              src={this.apiService.getPlanetImage(id)}
              onError={(e) =>
                (e.target.src = `https://starwars-visualguide.com/assets/img/placeholder.jpg`)
              }
              alt="planet"
              width={150}
            />

            <div>
              <h2 className={s.planetTitle}>{name}</h2>
              <ul className={s.listGroup}>
                <li className={s.listGroupItem}>
                  <span className={s.itemTitle}>Population:</span>
                  <span>{`${population} people`}</span>
                </li>
                <li className={s.listGroupItem}>
                  <span className={s.itemTitle}>Rotation Period:</span>
                  <span>{`${rotationPeriod} hours`}</span>
                </li>
                <li className={s.listGroupItem}>
                  <span className={s.itemTitle}>Diameter: </span>
                  <span>{`${diameter} miles`}</span>
                </li>
                <li className={s.listGroupItem}>
                  <span className={s.itemTitle}>Climate: </span>
                  <span>{climate}</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default RandomPlanet;
