import React, { Component } from "react";

class NavMessage extends Component {
  state = {
    message: "",
  };

  componentDidUpdate({ score, topScore }, prevState) {
    const newState = { animating: true };

    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "correct";
    }

    if (score !== this.props.score || this.state.message !== newState.message) {
      this.setState(newState);
    }
  }

  renderMessage = () => {
    switch (this.state.message) {
    case "correct":
      return "Correct";
    case "incorrect":
      return "Incorrect";
    default:
      return "";
    }
  };

  render() {
    return (
      <li>
        {this.renderMessage()}
      </li>
    );
  }
}

export default NavMessage;
