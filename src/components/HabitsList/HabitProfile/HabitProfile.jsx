import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import HabitForm from '../HabitsForm/HabitForm';

class HabitProfile extends Component {
  render() {
    const { match, location } = this.props;
    return (
      <>
        <header>
          {this.props.showModal && (
            <Modal modalToggle={this.props.modalToggle}>
              <HabitForm
                modalToggle={this.props.modalToggle}
                addHabit={this.addHabit}
              />
            </Modal>
          )}
          <Link to="/profile/habit-list">Назад</Link>
          <h2>{location.state.title}</h2>
          <button type="button" onClick={this.props.modalToggle}>
            Править
          </button>
        </header>

        <h3>Прогресс</h3>
        <p>{location.state.progress}%</p>
        <h3>График прогресса</h3>
        <Link to="/profile/habit-list">Удалить прогресс</Link>
        <Link to="/profile/habit-list">Удалить привычку</Link>
      </>
    );
  }
}

export default HabitProfile;