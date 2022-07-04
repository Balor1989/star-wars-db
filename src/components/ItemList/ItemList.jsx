import { Component } from "react";
import ApiService from "../../servises/ApiService";
import Spinner from "../Spinner";
import s from "./ItemList.module.css";

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

  renderPerson(array) {
    return array.map((item) => {
      return (
        <li
          key={item.id}
          className={`list-group-item ${s.item}`}
          onClick={() => this.props.onPersonSelected(item.id)}
        >
          {item.name}
        </li>
      );
    });
  }

  render() {
    const { allPeople, visible, loading } = this.state;
    return (
      <>
        {loading && <Spinner />}
        {visible && (
          <ul className="item-list list-group rounded">
            {this.renderPerson(allPeople)}
          </ul>
        )}
      </>
    );
  }
}
export default ItemList;
