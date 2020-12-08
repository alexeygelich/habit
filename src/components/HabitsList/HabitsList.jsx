import React, { Component } from "react";
import HabitItem from "./HabitItem";
import Modal from "../Modal";
import HabitForm from "./HabitForm";
import withContext from "../hoc/withContext";

class HabitsList extends Component {
  state = {
    habits: [{ id: "1", title: "Зарядка", startDate: "", progress: "" }],
  };

  componentDidMount() {
    const savedHabits = JSON.parse(localStorage.getItem("state")) || [];
    this.setState({ habits: savedHabits });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) localStorage.setItem("state", JSON.stringify(this.state.habits));
  }

  toChangeProgress = (id) => {
    this.setState((prevState) => {
      const obj = prevState.habits.find((habit) => {
        return habit.id === id;
      });
      obj.progress = this.toSetProgress(obj.startDate);
      return obj;
    });
  };

  toAddHabit = (habit) => {
    this.setState((prevState) => ({
      habits: [...prevState.habits, habit],
    }));
  };

  render() {
    const { habits, avatar, name } = this.props.user;
    return (
      <>
        <header>
          <div>
            <img src={avatar} alt={name} width="100" />
          </div>
          <button type="button"></button>
        </header>
        <div>Календарь</div>
        <h1>Мои привычки</h1>
        {this.state.habits.length ? (
          <ul>
            {habits.map((habit) => {
              return <HabitItem key={habit.id} progress={habit.progress} title={habit.title} />;
            })}
          </ul>
        ) : (
          <p>У вас пока нет привычек....</p>
        )}
        <button type="button" onClick={this.props.modalToggle}>
          +
        </button>
        {this.props.showModal && (
          <Modal modalToggle={this.props.modalToggle}>
            <HabitForm modalToggle={this.props.modalToggle} toAddHabit={this.toAddHabit} />
          </Modal>
        )}
      </>
    );
  }
}

export default withContext(HabitsList);
