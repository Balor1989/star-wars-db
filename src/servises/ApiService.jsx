import axios from "axios";

export default class ApiService {
  BASE_URL = "https://swapi.dev/";

  getItem = async () => {
    try {
      const res = await axios.get(`${this.BASE_URL}api/people/1`);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
}
