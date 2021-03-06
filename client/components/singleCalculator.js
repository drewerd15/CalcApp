import { create, all } from "mathjs";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCalculatorDesignThunk } from "../store/CalculatorReducer";

class SingleCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      design: "",
      x: 0,
      y: 0,
      answer: 0,
      //variables:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleChange(evt) {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    // this.props.editRobot({ ...this.state, id: this.props.robot.id });
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(`prevState`, prevState);
    // if (prevState !== this.state) {
    //   this.doMath();
    // }
    // this.setState({
    //   design: this.props.design || "",
    //   x: this.props.x || 0,
    //   y: this.props.y || 0,
    // });
  }

  doMath() {
    const config = {};
    const math = create(all, config);
    let scope = {
      x: this.state.x,
      y: this.state.y,
    };
    console.log(`design`, this.state.design);
    try {
      return math.evaluate(this.state.design, scope);
    } catch (error) {
      return "error";
    }
  }
  render() {
    return (
      <div>
        <div>Hello Calculator</div>
        <div>
          <form action="" onSubmit={this.handleSubmit}>
            <div>
              <label>X</label>
              <input
                type="text"
                name="x"
                id="xInput"
                onChange={this.handleChange}
                value={this.state.x}
              />
            </div>
            <div>
              <label>Y</label>
              <input
                type="text"
                name="y"
                id="yInput"
                onChange={this.handleChange}
                value={this.state.y}
              />
            </div>
            <label>Formula</label>
            <input
              type="text"
              name="design"
              id="design"
              onChange={this.handleChange}
              value={this.state.design}
            />
            <div>
              <input type="submit" value="GO!" />
            </div>
          </form>
          <div>Your answer is: </div>
          <div>{this.doMath()}</div>
        </div>
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
