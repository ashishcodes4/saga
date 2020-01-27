import React, { Component } from "react";
import Pokegame from "../Pokegame/Pokegame";
import RollDice from "../Dice/RollDice";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ""
    };
  }
  static defaultProps = {
    options: ["Pokedex", "Dice", "Hangman", "LightOut"]
  };

  selectOption = type => {
    this.setState(st => ({
      current: type
    }));
  };

  reset = () => {
    this.setState({
      current: ""
    });
  };

  render() {
    const selected = this.state.current === "" ? false : true;
    let curentSelection =
      this.state.current === "Pokedex" ? (
        <Pokegame />
      ) : this.state.current === "Dice" ? (
        <RollDice />
      ) : null;
    return (
      <div>
        <h2>Collection of extremely boring, ugly and meaningless games</h2>
        <p>Current Selection: {this.state.current}</p>
        <div className="reset">
          <button onClick={this.reset}>Reset</button>
        </div>
        {!selected
          ? this.props.options.map((op, index) => {
              return (
                <div
                  onClick={() => this.selectOption(op)}
                  data-type={op}
                  key={index}
                >
                  {op}
                </div>
              );
            })
          : curentSelection}
      </div>
    );
  }
}
