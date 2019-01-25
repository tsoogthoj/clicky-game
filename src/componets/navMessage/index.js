import React, { Component } from "react";
import "./style.css";

class NavMessage extends Component {
  state = {
    message: "",
    animating: false
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
      <div
        className={this.state.animating ? this.state.message : ""}
        onAnimationEnd={() => this.setState({ animating: false })}
      >
        {this.renderMessage()}
      </div>
    );
  }
}

export default NavMessage;
