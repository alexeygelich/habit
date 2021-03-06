import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Authentification.module.css";
import Container from "../shared/Container";
import { NavLink } from "react-router-dom";
// import Loganization from '../Logatization'
// import Registration from '../Registration'
import logo from "../../images/desktop/logo.png";

class Authentification extends Component {
  state = {
    name: "Alex",
    surname: "Gelich",
    phone: "+3806363636363",
  };

  onBtnClick = (e) => {
    console.log(window.innerWidth);
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
        <section className={styles.section}>
          <Container>
            <img className={styles.logo} src={logo} alt="logo" />
            {window.innerWidth > 767 ? (
              <p className={styles.motivation}>
                Мотивируй себя <br />
                на достижение ваших целей.
              </p>
            ) : (
              ""
            )}
            <div className={styles.buttonsWrapper}>
              <NavLink to="/login" className={styles.link} onClick={this.onBtnClick}>
                Вход
              </NavLink>
              <NavLink to="/registr" className={styles.link} onClick={this.onBtnClick}>
                Создать аккаунт
              </NavLink>
            </div>
          </Container>
        </section>
        <footer className={styles.footer}></footer>
      </>
    );
  }
}

export default Authentification;
