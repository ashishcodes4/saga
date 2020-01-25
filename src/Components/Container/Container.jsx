import React, { Component } from "react";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ""
    };
  }
  static defaultProps = {
    options: ["Pokedex", "Hangman", "LightOut"]
  };

  selectOption = type => {
    this.setState(st => ({
      current: type
    }));
  };

  render() {
    const selection = this.state.current === "" ? false : true;
    return (
      <div>
        <h2>Select form options below</h2>
        <p>Current Selection: {this.state.current}</p>
        {this.props.options.map((op, index) => {
          return (
            <div
              onClick={() => this.selectOption(op)}
              data-type={op}
              key={index}
            >
              {op}
            </div>
          );
        })}
      </div>
    );
  }
}
