import React from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";

const HabitsListItem = ({ title, progress, id }) => {
  return (
    <Link
      key={id}
      to={{
        pathname: `/profile/habit-list/${id}`,
        state: { title: title, progress: progress },
      }}
    >
      <li>
        <h3>{title}</h3>
        <div>{progress}%</div>
      </li>
    </Link>
  );
};

export default HabitsListItem;
