import { Component } from "react";
import ApiService from "../../servises/ApiService";
import ErrorMessage from "../Error";
import Spinner from "../Spinner";
import s from "./RandomPlanet.module.css";

class RandomPlanet extends Component {
  apiService = new ApiService();

  state = {
    planet: {},
    loading: true,
    visible: false,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  updatePlanet = async () => {
    try {
      this.setState({ loading: true, visible: false });
      const id = Math.floor(Math.random() * 40 + 2);
      const planet = await this.apiService.getPlanet(id);
      return this.setState({ planet: planet, loading: false, visible: true });
    } catch (err) {
      this.setState({ error: true, loading: false });
    }
  };

  render() {
    const {
      planet: { id, population, rotationPeriod, diameter, name },
      loading,
      visible,
      error,
    } = this.state;

    return (
      <div className={`${s.randomPlanet} rounded`}>
        {error && <ErrorMessage />}
        {loading && <Spinner />}
        {visible && (
          <div className={s.planetContainer}>
            <img
              className={s.planetImage}
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
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
                  <span className={s.itemTitle}>population:</span>
                  <span>{`${population} people`}</span>
                </li>
                <li className={s.listGroupItem}>
                  <span className={s.itemTitle}>rotationPeriod:</span>
                  <span>{`${rotationPeriod} hours`}</span>
                </li>
                <li className={s.listGroupItem}>
                  <span className={s.itemTitle}>diameter: </span>
                  <span>{`${diameter} miles`}</span>
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
