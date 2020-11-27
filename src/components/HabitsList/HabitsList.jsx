import React, { Component } from "react";
import PropTypes from "prop-types";
import HabitItem from "./HabitItem";
import Modal from "../Modal";
import HabitForm from "./HabitForm";

export default class HabitsList extends Component {
  state = {
    habits: [{ id: "1", title: "Зарядка", startDate: "", progress: "" }],
  };

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
    const { habits } = this.state;
    return (
      <>
        <header>
          <div>My accaunt</div>
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
        <button type="button" onClick={this.props.toggleModal}>
          +
        </button>
        {this.props.showModal && (
          <Modal toggleModal={this.props.toggleModal}>
            <HabitForm toggleModal={this.props.toggleModal} toAddHabit={this.toAddHabit} />
          </Modal>
        )}
      </>
    );
  }
}
