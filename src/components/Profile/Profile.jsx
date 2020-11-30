import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

import imgPerson from "../../images/logoPerson.png";

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
        <button className={styles.btnBack} type="button">
          Назад
        </button>
        <form className={styles.form} onSubmit={this.handleOnSubmit}>
          <label className={styles.label}>
            <img className={styles.labelPhoto} src={imgPerson} alt="" width="100" height="100" />
            Сменить фото
            <input
              className={styles.inputText}
              type="file"
              value={this.state.avatar}
              name="avatar"
              onChange={this.handleOnChange}
            />
          </label>
          <label className={styles.label}>
            Рост
            <input
              className={styles.inputText}
              type="number"
              value={this.state.height}
              name="height"
              onChange={this.handleOnChange}
              placeholder="170 см"
            />
          </label>
          <label className={styles.label}>
            Вес
            <input
              className={styles.inputText}
              type="number"
              value={this.state.weight}
              name="weight"
              onChange={this.handleOnChange}
              placeholder="70 кг"
            />
          </label>
          <label className={styles.label}>
            Дата рождения
            <input
              className={styles.inputText}
              type="date"
              value={this.state.birthDate}
              name="birthDate"
              onChange={this.handleOnChange}
              placeholder="01.01.1990"
            />
          </label>
          <button className={styles.button} type="submit">
            Создать
          </button>
        </form>
        <footer className={styles.footer}></footer>
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
