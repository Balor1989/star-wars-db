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
    // eslint-disable-next-line array-callback-return
    return array.map((item) => {
      if (item.id <= 6) {
        return (
          <li
            key={item.id}
            className={`list-group-item ${s.item}`}
            onClick={() => this.props.onPersonSelected(item.id)}
          >
            {item.name}
          </li>
        );
      }
    });
  }

  render() {
    const { allPeople, visible, loading } = this.state;
    return (
      <div className={`${s.itemBox} rounded`}>
        {loading && <Spinner />}
        {visible && (
          <ul className={`${s.itemList} list-group rounded`}>
            {this.renderPerson(allPeople)}
          </ul>
        )}
      </div>
    );
  }
}
export default ItemList;
