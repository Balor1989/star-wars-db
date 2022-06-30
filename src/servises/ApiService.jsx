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

  async getPlanet(id) {
    const planet = await this.getResourse(`planets/${id}/`);
    return planet;
  }
}
