// import React from "react";
import "./app.css";
import Habit_nav from "./components/habit_nav";
import Habits_input from "./components/habit_input";
import Habit from "./components/habit";
import Habits from "./components/habits";

import React, { Component } from "react";

class App extends Component {
  state = {
    habits__list: [
      {
        id: "1",
        name: "Reading",
        count: 0,
      },
      {
        id: "2",
        name: "Running",
        count: 0,
      },
    ],
  };
  //아이템 추가
  addhabititem = (content) => {
    const habit = [...this.state.habits__list];
    const index = habit.length - 1;
    const id = Number(habit[index].id) + 1;
    const new__habit = {
      id: String(id),
      name: content,
      count: 0,
    };
    habit.push(new__habit);
    console.log(habit);
    this.setState({ habits__list: habit });
  };
  //좋아요 표시
  handleIncrement = (habit) => {
    const habits = [...this.state.habits__list];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };
  //싫어요 표시
  handleDecrement = (habit) => {
    const habits = [...this.state.habits__list];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    //콘-카운터는 n번째 해빗의 -1 의 값
    habits[index].count = count < 0 ? 0 : count;
    //n번째 해빗의 카운터는 ? 콘-카운터값이 0보다 작으면 0 이고 : 아니면 count 다.
    this.setState({ habits });
    console.log(this.state.habits__list);
  };
  //아이템 삭제
  handleDelete = (habit) => {
    console.log(habit);
    const habits = this.state.habits__list.filter(
      (item) => item.id !== habit.id
    );

    console.log(habits);
    this.setState({ habits__list: habits });
    console.log(this.state.habits__list);
  };

  totalCount = () => {
    let score = 0;
    this.state.habits__list.map((habit) => {
      score += habit.count;
    });
    return score;
  };

  resetBtn = () => {
    console.log("resetBtn");
    const habit = [];
    this.setState({ habits__list: habit });
  };

  render() {
    console.log("APPS");
    return (
      <>
        <nav>
          <Habit_nav score={this.totalCount()} />
        </nav>
        <section>
          <Habits_input addItem={this.addhabititem} />
          {this.state.habits__list.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </section>
        <div>
          <button className="Reset-btn" onClick={this.resetBtn}>
            Reset All
          </button>
        </div>
      </>
    );
  }
}

export default App;

// function App() {
//   return <Habits />;
// }

// export default App;
// console.log("render");
// console.log(this.props.habits);
// const { name, count } = this.props.habit;
// 1. 네비바
// 2. 컨테이너 부분
//   - add 버튼 클릭시 내가 작성한것이 밑에 추가가 된다.
//   - Reset ALL 버튼 클릭시 아이템 목록이 초기화가 된다.
//   -여기서 habit에 값을 넘겨주자
