import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(bots => this.setState({ bots: bots }));
  }

  handleAddBotToArmy = botObj => {
    if (this.state.army.includes(botObj)) {
      alert("no");
    } else {
      this.setState({ army: [...this.state.army, botObj] });
    }
  };

  handleRemoveBotFromArmy = botObj => {
    this.setState({ army: this.state.army.filter(bots => bots !== botObj) });
  };

  render() {
    console.log("army", this.state.army);
    return (
      <div>
        <YourBotArmy
          bots={this.state.army}
          handleClick={this.handleRemoveBotFromArmy}
        />
        <BotCollection
          bots={this.state.bots}
          handleClick={this.handleAddBotToArmy}
        />
      </div>
    );
  }
}

export default BotsPage;
