import React, { Component } from "react";
import PropTypes from "prop-types";
// import styles from "./HabitForm.module.css";

export default class HabitForm extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    title: "",
    comment: "",
    repeat: "",
    color: "#390093",
    remind: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
  };

  render() {
    const { title, comment, repeat, color, remind } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div style={{ backgroundColor: this.state.color }}>
            <button type="button">X</button>
            <h2>Новая привычка</h2>
            <label>
              <input type="text" name="title" value={title} onChange={this.handleChange} />
            </label>
          </div>

          <label>
            <input type="textaria" name="comment" value={comment} onChange={this.handleChange} />
          </label>
          <label>
            <select name="repeat" value={repeat} onChange={this.handleChange}>
              <option value="" disabled>
                ...
              </option>
              <option value="1">Каждый час</option>
              <option value="2">Каждый 2 часа</option>
            </select>
          </label>
          <label>
            <input type="color" name="color" value={color} onChange={this.handleChange} />
          </label>
          <label>
            <input type="checkbox" name="remind" checked={remind} onChange={this.handleChange} />
          </label>
          <button type="submit">Сохранить</button>
        </form>
      </div>
    );
  }
}
