import { Component } from "react";
import ItemDetails from "../../components/ItemDetails";
import ItemList from "../../components/ItemList";
import RecordRow from "../../components/RecordRow";
import ApiService from "../../servises/ApiService";
import s from "./StarshipPage.module.css";

class StarshipPage extends Component {
  apiService = new ApiService();

  state = {
    starshipId: null,
  };

  starshipSelected = (id) => {
    this.setState({
      starshipId: id,
    });
  };
  render() {
    const { starshipId } = this.state;
    const { getAllStarships, getStarship, getStarshipImage } = this.apiService;
    return (
      <div className={`row mb2 ${s.renderBox}`}>
        <div className={`col-md-6 ${s.itemListBox}`}>
          <ItemList
            onItemSelected={this.starshipSelected}
            getItem={getAllStarships}
            renderItem={({ name, model }) => `${name} (${model})`}
          />
        </div>
        <div className={`col-md-6 ${s.itemListBox}`}>
          <ItemDetails
            itemId={starshipId}
            getResult={getStarship}
            getImageUrl={getStarshipImage}
          >
            <RecordRow value="model" label="Model:" />
            <RecordRow value="manufacturer" label="Manufacturer:" />
            <RecordRow value="costInCredits" label="Cost:" ending="credits" />
            <RecordRow value="length" label="Length:" ending="m" />
            <RecordRow value="crew" label="Crew:" ending="people" />
            <RecordRow value="passengers" label="Passengers:" ending="people" />
            <RecordRow
              value="cargoCapacity"
              label="Cargo Capacity:"
              ending="kg"
            />
          </ItemDetails>
        </div>
      </div>
    );
  }
}

export default StarshipPage;
