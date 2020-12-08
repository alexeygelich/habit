import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Registration.module.css";
import { Link } from "react-router-dom";

export default class Registration extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    name: "",
    surname: "",
    tel: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
  };

  render() {
    const { name, surname, tel } = this.state;
    return (
      <>
        <div className={styles.header}>
          <Link to="/">Назад</Link>
        </div>
        <form className={styles.form} action="submit" onSubmit={this.handleSubmit}>
          <label htmlFor="name" value={name}></label>
          <input type="text" name="name" placeholder="Имя" onChange={this.handleChange} />
          <label htmlFor="surname" value={surname}></label>
          <input type="text" name="surname" placeholder="Фамилия" onChange={this.handleChange} />
          <label htmlFor="tel" value={tel}></label>
          <input type="text" name="tel" placeholder="+380..." onChange={this.handleChange} />
          <input type="submit" name="userPhone" />
        </form>
      </>
    );
  }
}
