import axios from "axios";

export default class ApiService {
  BASE_URL = "https://swapi.dev/api/";

  getResourse = async (url) => {
    try {
      const res = await axios.get(`${this.BASE_URL}${url}`);
      console.log(res);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  async getAllPlanets() {
    const allPlanets = await this.getResourse(`planets/`);
    return allPlanets;
  }

  async getPlanet(id) {
    const planet = await this.getResourse(`planets/${id}/`);
    return this.#transformPlanet(planet);
  }
  async getAllStarships() {
    const allStarships = await this.getResourse(`starships/`);
    return allStarships;
  }

  async getStarship(id) {
    const starship = await this.getResourse(`starships/${id}/`);
    return starship;
  }

  #exstractId(item) {
    const regExpId = /\/([0-9]*)\/$/;
    return item.url.match(regExpId)[1];
  }

  #transformPlanet(planet) {
    return {
      id: this.#exstractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }
}
