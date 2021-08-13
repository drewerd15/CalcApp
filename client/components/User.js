import React from "react";
import { connect } from "react-redux";
import { CalculatorReducer } from "../store/CalculatorReducer";
import CalculatorList from "./CalculatorList";
import { Link } from "react-router-dom";

export const User = (props) => {
  const { username } = props;
  ///const { CalculatorList } = props;
  return (
    <div>
      {console.log("User", username)}
      <h3>Welcome, {username}</h3>
      <h3>
        <Link to={"/list"} className="btn btn-primary">
          Go to lists page
        </Link>
      </h3>
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(User);
