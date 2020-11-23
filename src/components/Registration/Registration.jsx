import React from "react";
import PropTypes from "prop-types";
import styles from './Registration.module.css';

const Registration = (props) => (
  <>
    <div className={styles.header}>
    <button type="button">Назад</button>
    </div>
    <form className={styles.form} action="submit">
      <label htmlFor="userName"></label>
      <input type="text" name="userName" placeholder="Имя"/>
      <label htmlFor="userSurname"></label>
      <input type="text" name="userSurname" placeholder="Фамилия"/>
      <label htmlFor="userPhone"></label>
      <input type="text" name="userPhone" placeholder="+380..."/>
      <input type="submit" name="userPhone" />
    </form>
  </>
);

Registration.propTypes = {
  // bla: PropTypes.string,
};

Registration.defaultProps = {
  // bla: 'test',
};

export default Registration;