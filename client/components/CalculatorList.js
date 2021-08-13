import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCalculatorsList } from "../store/CalculatorReducer";
import { User } from "./User";

/**
 * COMPONENT
 */
// export const CalculatorList = (props) => {
//   const { username } = props;
//   const calculators = useState([]);
//   useEffect(() => {
//     props.getCalculatorsList();
//   }, [calculators.length]);
//   console.log("calculator", calculators);

class CalculatorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculators: [],
    };
  }
  componentDidMount() {
    this.setthis.props.getCalculatorsList();
  }
  render() {
    const { calculators } = this.state;
    console.log(`calculator`, calculators);
    console.log(`this.props`, this.props);
    return (
      <div className="container">
        <div>
          <h1>Calculators</h1>
          <ul>
            {calculators.map((calculator) => {
              return;
              <li key={calculator.id}> </li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
//console.log(`this.state`, this.state);
//const { calculators } = this.state;

/*
 * CONTAINER
 */

const mapState = (state) => {
  return {
    username: state.auth.username,
    calculators: state,
  };
};
const mapDispatch = (dispatch) => ({
  getCalculatorsList: () => dispatch(getCalculatorsList()),
});

export default connect(mapState, mapDispatch)(CalculatorList);
