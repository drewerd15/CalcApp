import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCalculatorDesign,
  setCalculatorDesign,
} from "../store/CalculatorReducer";

class EditCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      design: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>Hello Calculator</div>
        <div>Calculator goes here</div>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    username: state.auth.username,

    design: state.CalculatorReducer.design,
  };
};
const mapDispatch = (dispatch) => ({
  // getCalcFunc : () => dispatch(getCalculatorsList()),
  saveCalculator: (calculator) =>
    dispatch(setCalculatorSchemaThunk(calculator)),
  getCalculatorSchema: (id) => dispatch(getCalculatorSchemaThunk(id)),
});

export default connect(mapState, mapDispatch)(EditCalculator);
