import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

const Container = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
);

Container.propTypes = {
  // bla: PropTypes.string,
};

Container.defaultProps = {
  // bla: 'test',
};

export default Container;
