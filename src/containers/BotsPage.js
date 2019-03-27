import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: [],
    containerclicked: false,
    selectedBot: {}
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(bots => this.setState({ bots: bots }));
  }

  handleShowBotSpecs = botObj => {
    this.setState({ containerclicked: true, selectedBot: botObj });
  };

  handleAddBotToArmy = botObj => {
    if (this.state.army.includes(botObj)) {
      alert("wrong!");
    } else {
      this.setState({
        army: [...this.state.army, botObj],
        containerclicked: false
      });
    }
  };

  handleGoBack = () => {
    this.setState({ containerclicked: false });
  };

  handleRemoveBotFromArmy = botObj => {
    this.setState({ army: this.state.army.filter(bots => bots !== botObj) });
  };

  render() {
    if (this.state.containerclicked) {
      return (
        <div>
          <YourBotArmy
            bots={this.state.army}
            handleClick={this.handleRemoveBotFromArmy}
          />
          <BotSpecs
            bot={this.state.selectedBot}
            handleClick={this.handleAddBotToArmy}
            handleGoBack={this.handleGoBack}
          />
        </div>
      );
    } else {
      return (
        <div>
          <YourBotArmy
            bots={this.state.army}
            handleClick={this.handleRemoveBotFromArmy}
          />
          <BotCollection
            bots={this.state.bots}
            handleClick={this.handleShowBotSpecs}
          />
        </div>
      );
    }
  }
}

export default BotsPage;
