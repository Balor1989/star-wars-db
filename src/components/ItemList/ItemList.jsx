import { Component } from "react";
import Spinner from "../Spinner";
import s from "./ItemList.module.css";

class ItemList extends Component {
  state = {
    items: {},
    visible: false,
    loading: true,
  };

  componentDidMount() {
    this.onGetAllPeople();
  }

  onGetAllPeople = async () => {
    try {
      const items = await this.props.getItem();

      return this.setState({
        items: items,
        visible: true,
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  renderItem(array) {
    // eslint-disable-next-line array-callback-return
    return array.map((item) => {
      if (item.id <= 6) {
        return (
          <li
            key={item.id}
            className={`list-group-item ${s.item}`}
            onClick={() => this.props.onItemSelected(item.id)}
          >
            {item.name}
          </li>
        );
      }
    });
  }

  render() {
    const { items, visible, loading } = this.state;
    return (
      <div className={`${s.itemBox} rounded`}>
        {loading && <Spinner />}
        {visible && (
          <ul className={`${s.itemList} list-group rounded`}>
            {this.renderItem(items)}
          </ul>
        )}
      </div>
    );
  }
}
export default ItemList;
