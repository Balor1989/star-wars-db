import { Component } from "react";
import { ApiServiceConsumer } from "../../components/ApiServiceContext";
import ItemDetails from "../../components/ItemDetails";
import ItemList from "../../components/ItemList";
import RecordRow from "../../components/RecordRow";
import s from "./PeoplePage.module.css";

class PeoplePage extends Component {
  state = {
    personId: null,
  };

  personSelected = (id) => {
    this.setState({
      personId: id,
    });
  };
  render() {
    const { personId } = this.state;
    return (
      <ApiServiceConsumer>
        {({ getAllPeople, getPerson, getPersonImage }) => {
          return (
            <div className={`row mb2 ${s.renderBox}`}>
              <div className="col-md-6">
                <ItemList
                  onItemSelected={this.personSelected}
                  getItem={getAllPeople}
                  renderItem={({ name, gender, birthYear }) =>
                    `${name} (${gender}, ${birthYear})`
                  }
                />
              </div>
              <div className="col-md-6">
                <ItemDetails
                  itemId={personId}
                  getResult={getPerson}
                  getImageUrl={getPersonImage}
                >
                  <RecordRow value="gender" label="Gender:" />
                  <RecordRow value="birthYear" label="Birth Year:" />
                  <RecordRow value="height" label="Height:" ending="cm" />
                  <RecordRow value="mass" label="Mass:" ending="kg" />
                </ItemDetails>
              </div>
            </div>
          );
        }}
      </ApiServiceConsumer>
    );
  }
}

export default PeoplePage;
