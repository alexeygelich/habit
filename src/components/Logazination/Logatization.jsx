import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Logazination.module.css";
import { Link } from "react-router-dom";

export default class Logazination extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    tel: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <>
        <div className={styles.header}>
          <Link to="/">Назад</Link>
        </div>
        <form className={styles.form} action="submit" onSubmit={this.handleSubmit}>
          <label htmlFor="tel"></label>
          <input type="text" name="tel" placeholder="+380..." value={this.tel} onChange={this.handleChange} />
          <input type="submit" name="userPhone" />
        </form>
      </>
    );
  }
}
