import { Component } from "react";
import Spinner from "../Spinner";
import s from "./ItemList.module.css";
import PropTypes from "prop-types";

class ItemList extends Component {
  state = {
    items: {},
    visible: false,
    loading: true,
  };

  componentDidMount() {
    this.onGetAllItems();
  }

  onGetAllItems = async () => {
    const { getItem } = this.props;
    try {
      const items = await getItem();

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
    const { renderItem, onItemSelected } = this.props;
    return array.map((item) => {
      const { id } = item;
      const name = renderItem(item);
      return (
        <li
          key={id}
          className={`list-group-item ${s.item}`}
          onClick={() => onItemSelected(id)}
        >
          {name}
        </li>
      );
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

ItemList.propTypes = {
  getItem: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};
