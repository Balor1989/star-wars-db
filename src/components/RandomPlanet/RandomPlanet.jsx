import { Component } from "react";
import ApiService from "../../servises/ApiService";
import Spinner from "../Spinner";
import s from "./RandomPlanet.module.css";

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
    this.setState({ loading: true, visible: false });
    const id = Math.floor(Math.random() * 19 + 2);
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
      <div className={`${s.randomPlanet} rounded`}>
        {loading && <Spinner />}
        {visible && (
          <>
            <img
              className={s.planetImage}
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
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
          </>
        )}
      </div>
    );
  }
}
export default RandomPlanet;
