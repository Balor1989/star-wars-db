import { Component } from "react";
import ApiService from "../../servises/ApiService";

class ItemList extends Component {
  apiService = new ApiService();

  state = {
    allPeople: {},
  };

  componentDidMount() {
    this.onGetAllPeople();
  }

  onGetAllPeople = async () => {
    try {
      const allPeople = await this.apiService.getAllPeople();

      return this.setState({ allPeople: allPeople });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">Luke Skywalker</li>
        <li className="list-group-item">Darth Vader</li>
        <li className="list-group-item">R2-D2</li>
      </ul>
    );
  }
}
export default ItemList;
