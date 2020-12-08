import React from "react";
import UserContext from "../../context/UserContext";

const withContext = (WrapperComponent) => {
  return function WithContext(props) {
    return <UserContext.Consumer>{(ctx) => <WrapperComponent {...ctx} {...props} />}</UserContext.Consumer>;
  };
};

export default withContext;
