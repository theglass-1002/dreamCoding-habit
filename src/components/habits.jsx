import React, { Component } from "react";
import Habit from "./habit";
import Habit_input from "./habit_input";

class Habits extends Component {
  addItem = (value, habit) => {
    console.log(value);
    // const habits = [...this.state.habits];
    // const index = habits.length - 1;
    // const id = Number(habits[index].id) + 1;
    // const obj = {
    //   id: String(id),
    //   name: value,
    //   count: 0,
    // };
    // habits.push(obj);
    // this.setState({ habits });
    // console.log(habits);
  };

  handleIncrement = (habit) => {
    console.log("handleIncrement");
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    console.log("handleDecrement");
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    console.log("handleDelete");

    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {/* {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdditem={this.addItem}
          />
        ))} */}

        <Habit_input habit={this.state.content} onAdditem={this.addItem} />
      </ul>
    );
  }
}

export default Habits;
