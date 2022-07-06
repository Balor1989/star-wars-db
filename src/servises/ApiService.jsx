import axios from "axios";

export default class ApiService {
  #BASE_URL = "https://swapi.dev/api/";
  #IMAGE_URL = "https://starwars-visualguide.com/assets/img/";

  getResourse = async (url) => {
    try {
      const res = await axios.get(`${this.#BASE_URL}${url}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  getAllPlanets = async () => {
    const allPlanets = await this.getResourse(`planets/`);
    return allPlanets.results.map((planet) => this.#transformPlanet(planet));
  };
  getPlanet = async (id) => {
    const planet = await this.getResourse(`planets/${id}/`);
    return this.#transformPlanet(planet);
  };
  getAllStarships = async () => {
    const allStarships = await this.getResourse(`starships/`);
    return allStarships.results.map((starship) =>
      this.#transformStarship(starship)
    );
  };

  getStarship = async (id) => {
    const starship = await this.getResourse(`starships/${id}/`);
    return this.#transformStarship(starship);
  };
  getAllPeople = async () => {
    const allPeople = await this.getResourse(`people/`);
    return allPeople.results.map((person) => this.#transformPerson(person));
  };

  getPerson = async (id) => {
    const person = await this.getResourse(`people/${id}/`);
    return this.#transformPerson(person);
  };

  getPlanetImage = (id) => {
    return `${this.#IMAGE_URL}planets/${id}.jpg`;
  };

  getPersonImage = (id) => {
    return `${this.#IMAGE_URL}characters/${id}.jpg`;
  };

  getStarshipImage = (id) => {
    return `${this.#IMAGE_URL}starships/${id}.jpg`;
  };

  #exstractId = (item) => {
    const regExpId = /\/([0-9]*)\/$/;
    return item.url.match(regExpId)[1];
  };

  #transformPlanet = (planet) => {
    const { name, population, diameter, climate, rotation_period } = planet;
    return {
      id: this.#exstractId(planet),
      name,
      population,
      rotationPeriod: rotation_period,
      diameter,
      climate,
    };
  };
  #transformPerson = (person) => {
    const { name, gender, birth_year, height, mass } = person;
    return {
      id: this.#exstractId(person),
      name,
      gender,
      birthYear: birth_year,
      height,
      mass,
    };
  };

  #transformStarship = (starship) => {
    const {
      name,
      model,
      manufacturer,
      cost_in_credits,
      length,
      crew,
      passengers,
      cargo_capacity,
    } = starship;
    return {
      id: this.#exstractId(starship),
      name,
      model,
      manufacturer,
      costInCredits: cost_in_credits,
      length,
      crew,
      passengers,
      cargoCapacity: cargo_capacity,
    };
  };
}
