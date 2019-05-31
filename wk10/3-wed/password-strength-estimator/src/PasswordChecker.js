import React from "react";
import { checkPassword } from "./checkPassword";

export default class PasswordChecker extends React.Component {
  constructor() {
    super();
    this.state = {
      passwordScore: checkPassword(""),
      message: "Give me your best shot!"
    };
    this.passwordInput = this.passwordInput.bind(this);
  }

  passwordInput(event) {
    const passwordScore = checkPassword(event.target.value);
    let message;
    if (passwordScore.score === 1) {
      message = "You can do better than that!";
    } else if (passwordScore.score === 2) {
      message = "You've got to be kidding me!";
    } else if (passwordScore.score === 3) {
      message = "How AVERAGE...";
    } else if (passwordScore.score === 4) {
      message = "Finally, you're getting somewhere!";
    } else if (passwordScore.score === 5) {
      message = "Good! What took you so long!";
    } else if (passwordScore.score === 6) {
      message = "EXCELLENT! Good luck remembering this";
    }

    this.setState({ passwordScore, message });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.passwordInput}
          type="text"
          placeholder="Enter Password"
        />
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
