import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  render() {
    let bots = this.props.bots.map(bot => (
      <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick} />
    ));
    return (
      <div className="ui four column grid">
        <div className="row">
          {bots}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
