import React, { Component } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  onCloseModal = (e) => {
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onCloseModal);
  }

  render() {
    return (
      <div id="backdrop" className={styles.backdrop}>
        <div className={styles.modal}>{this.props.children}</div>
      </div>
    );
  }
}
