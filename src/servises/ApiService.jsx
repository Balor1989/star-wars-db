import axios from "axios";

export default class ApiService {
  getItem = async () => {
    const res = await axios.get("https://swapi.dev/api/people/1");
    console.log(res.data);
  };
}
