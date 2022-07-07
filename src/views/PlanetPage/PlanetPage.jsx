import { Component } from "react";
import { ApiServiceConsumer } from "../../components/ApiServiceContext";
import ItemDetails from "../../components/ItemDetails";
import ItemList from "../../components/ItemList";
import RecordRow from "../../components/RecordRow";
import s from "./PlanetPage.module.css";

class PlanetPage extends Component {
  state = {
    planetId: null,
  };

  planetSelected = (id) => {
    this.setState({
      planetId: id,
    });
  };
  render() {
    const { planetId } = this.state;
    return (
      <ApiServiceConsumer>
        {({ getAllPlanets, getPlanet, getPlanetImage }) => {
          return (
            <div className={`row mb2 ${s.renderBox}`}>
              <div className={`col-md-6 ${s.itemListBox}`}>
                <ItemList
                  onItemSelected={this.planetSelected}
                  getItem={getAllPlanets}
                  renderItem={({ name, diameter, climate }) =>
                    `${name} (${diameter} miles, ${climate})`
                  }
                />
              </div>
              <div className={`col-md-6 ${s.itemListBox}`}>
                <ItemDetails
                  itemId={planetId}
                  getResult={getPlanet}
                  getImageUrl={getPlanetImage}
                >
                  <RecordRow
                    value="population"
                    label="Population:"
                    ending="people"
                  />
                  <RecordRow
                    value="rotationPeriod"
                    label="Rotation Period:"
                    ending="hours"
                  />
                  <RecordRow
                    value="diameter"
                    label="Diameter:"
                    ending="miles"
                  />
                  <RecordRow value="climate" label="Climate:" />
                </ItemDetails>
              </div>
            </div>
          );
        }}
      </ApiServiceConsumer>
    );
  }
}

export default PlanetPage;
