import React from "react";
import "./TweetBox.css";

const maxContentLength = 140;

export default class TweetBox extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      content: ""
    };
  }

  handleChange(event) {
    if (event.target.value.length > maxContentLength) {
      event.preventDefault();
      return;
    }
    this.setState({
      content: event.target.value
    });
    console.log(this.state.content);
  }

  render() {
    const { content } = this.state;
    // const content = this.state.content;
    const isDisabled = content.length === 0 || content.length > 140;
    const spanClass = content.length > 110 ? "warning" : "";
    const percentage =
      100 - ((maxContentLength - content.length) / maxContentLength) * 100;

    return (
      <div>
        <div className="meter">
          <div className="meter-bar" style={{ width: percentage + "%" }} />
        </div>

        <textarea
          onChange={this.handleChange}
          placeholder="type something..."
        />
        <footer>
          <span className={spanClass}>{maxContentLength - content.length}</span>
          <button disabled={isDisabled}>tweet</button>
        </footer>
      </div>
    );
  }
}
