import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Authentification.module.css";
// import Loganization from '../Logatization'
// import Registration from '../Registration'

class Authentification extends Component {
  state = {
    name: "Alex",
    surname: "Gelich",
    phone: "+3806363636363",
  };

  onBtnClick = (e) => {
    if (e.target.textContent === "Вход") {
      console.log("логин");
      // <Loganization/>
    } else {
      console.log("Регистрация");
      // <Registration/>
    }
  };

  render() {
    return (
      <>
        <section>
          <button className={styles.button} type="button" onClick={this.onBtnClick}>
            Вход
          </button>
          <button className={styles.button} type="button" onClick={this.onBtnClick}>
            Создать аккаунт
          </button>
        </section>
      </>
    );
  }
}

export default Authentification;
