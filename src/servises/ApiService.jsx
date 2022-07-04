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
    return allPlanets.results.map((planet) => this.#transformPlanet(planet));
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
  async getAllPeople() {
    const allPeople = await this.getResourse(`people/`);
    return allPeople.results.map((person) => this.#transformPerson(person));
  }

  async getPerson(id) {
    const person = await this.getResourse(`people/${id}/`);
    return this.#transformPerson(person);
  }

  #exstractId(item) {
    const regExpId = /\/([0-9]*)\/$/;
    return item.url.match(regExpId)[1];
  }

  #transformPlanet = (planet) => {
    return {
      id: this.#exstractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };
  #transformPerson = (person) => {
    return {
      id: this.#exstractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      height: person.height,
      mass: person.mass,
    };
  };
}
