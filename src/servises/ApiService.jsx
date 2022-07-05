import axios from "axios";

export default class ApiService {
  BASE_URL = "https://swapi.dev/api/";

  getResourse = async (url) => {
    try {
      const res = await axios.get(`${this.BASE_URL}${url}`);
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

  #transformStarship = (starship) => {
    return {
      id: this.#exstractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };
}
