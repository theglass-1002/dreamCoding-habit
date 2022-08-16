import React, { Component } from "react";

class Habit_nav extends Component {
  render() {
    const score = this.props.score;
    //여기서 props 로 totalcount를가져와서 밑에 변수로 할당해줘야함.
    return (
      <li className="nav">
        <i className="habit-leaf fa-solid fa-leaf"></i>
        <span className="habit-title">Habit Tracker</span>
        <span className="habit-totalCount">{score}</span>
      </li>
    );
  }
}

export default Habit_nav;
