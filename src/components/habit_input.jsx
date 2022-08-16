import React, { Component } from "react";
import Habits from "./habits";
class Habit_input extends Component {
  state = {
    content: "",
  };
  inputValue = (e) => {
    console.log("value is:", e.target.value);
    this.setState({ content: e.target.value });
  };

  addhabitInput = () => {
    // 버튼클릭 이벤트 리스너
    console.log("handleClick 👉️" + this.state.content);
    this.props.addItem(this.state.content);
  };

  render() {
    // console.log(this.props);
    return (
      <li className="habit-input-container">
        <ul>
          <input
            className="habit-input"
            type="text"
            placeholder="Habit"
            onChange={this.inputValue}
            values={this.content}
          />
          <button className="habit-btn" onClick={this.addhabitInput}>
            Add
          </button>
        </ul>
      </li>
    );
  }
}

export default Habit_input;
