import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { User } from "./User";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;
  //console.log("props", props);
  // console.log(`this.props`, this.props);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Link to={"/user"} className="btn btn-primary">
        Go to user page
      </Link>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
