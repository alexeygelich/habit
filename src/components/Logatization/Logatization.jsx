import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logatization.module.css';

const Logatization = (props) => (
  <>
    <div className={styles.header}>
    <button type="button">Назад</button>
    </div>
    <form className={styles.form} action="submit">
      <label htmlFor="userPhone"></label>
      <input type="text" name="userPhone" placeholder="+380..."/>
      <input type="submit" name="userPhone" />
    </form>
  </>
);

Logatization.propTypes = {
  // bla: PropTypes.string,
};

Logatization.defaultProps = {
  // bla: 'test',
};

export default Logatization;
