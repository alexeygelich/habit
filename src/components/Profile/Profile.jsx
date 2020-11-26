import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

class Profile extends Component {
  state = {
    avatar: "",
    height: "",
    weight: "",
    birthDate: "",
  };

  handleOnChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    // Добавить логику сохранения профиля юзера
    this.setState({
      avatar: "",
      height: "",
      weight: "",
      birthDate: "",
    });
  };

  render() {
    return (
      <>
        <button type="button">Назад</button>
        <form className={styles.form} onSubmit={this.handleOnSubmit}>
          <label>
            Сменить фото
            <input type="file" value={this.state.avatar} name="avatar" onChange={this.handleOnChange} />
          </label>
          <label>
            Рост
            <input
              type="number"
              value={this.state.height}
              name="height"
              onChange={this.handleOnChange}
              placeholder="170 см"
            />
          </label>
          <label>
            Вес
            <input
              type="number"
              value={this.state.weight}
              name="weight"
              onChange={this.handleOnChange}
              placeholder="70 кг"
            />
          </label>
          <label>
            Дата рождения
            <input
              type="date"
              value={this.state.birthDate}
              name="birthDate"
              onChange={this.handleOnChange}
              placeholder="01.01.1990"
            />
          </label>
          <input type="submit" value="Создать" />
        </form>
      </>
    );
  }
}

Profile.propTypes = {
  // bla: PropTypes.string,
};

Profile.defaultProps = {
  // bla: 'test',
};

export default Profile;
