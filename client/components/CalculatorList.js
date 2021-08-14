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
  }
  componentDidMount() {
    this.props.getCalcFunc();
  }
  render() {
    //const calculators = this.state.calculators;

    console.log(`calculator`, this.state);
    console.log(`this.props`, this.props);
    return (
      <div className="container">
        <div>
          <h1>Calculators</h1>
          <ul>
            {this.props.calculators && this.props.calculators.length > 0 ? (
              <div>
                {this.props.calculators.map((calculator) => (
                  <div key={calculator.id}>
                    <h3>{calculator.name}</h3>
                    <h3>{calculator.description}</h3>
                  </div>
                ))}
              </div>
            ) : (
              <div>womp</div>
            )}
            {/* {calculators.map((calculator) => {
              return;
              <li key={calculator.id}> </li>;
            })} */}
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
    calculators: state.CalculatorReducer.calculators,
  };
};
const mapDispatch = (dispatch) => ({
  getCalcFunc: () => dispatch(getCalculatorsList()),
});

export default connect(mapState, mapDispatch)(CalculatorList);
