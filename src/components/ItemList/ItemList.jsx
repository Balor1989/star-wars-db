import { Component } from "react";
import ApiService from "../../servises/ApiService";
import Spinner from "../Spinner";

class ItemList extends Component {
  apiService = new ApiService();

  state = {
    allPeople: {},
    visible: false,
    loading: true,
  };

  componentDidMount() {
    this.onGetAllPeople();
  }

  onGetAllPeople = async () => {
    try {
      const allPeople = await this.apiService.getAllPeople();

      return this.setState({
        allPeople: allPeople,
        visible: true,
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { allPeople, visible, loading } = this.state;
    return (
      <>
        {loading && <Spinner />}
        {visible && (
          <ul className="item-list list-group">
            <li className="list-group-item">Luke Skywalker</li>
            <li className="list-group-item">Darth Vader</li>
            <li className="list-group-item">R2-D2</li>
          </ul>
        )}
      </>
    );
  }
}
export default ItemList;
