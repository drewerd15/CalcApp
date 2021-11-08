import React, { Component } from "react";
import { connect } from "react-redux";
import { getCalculatorDesignThunk } from "../store/CalculatorReducer";

class SingleCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      design: "",
    };
  }

  componentDidMount() {
    this.props.getCalculator(this.props.match.params.id);
    console.log(`this.props`, this.state);

    if (this.props.schema && this.props.schema.length > 0) {
      this.setState({
        schema: this.props.schema,
        uischema: this.props.uischema,
      });
    }
  }
  render() {
    return (
      <div>
        <div>Hello Calculator</div>
        <div></div>
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
    dispatch(setCalculatorDesignThunk(calculator)),
  getCalculator: (id) => dispatch(getCalculatorDesignThunk(id)),
});

export default connect(mapState, mapDispatch)(SingleCalculator);
