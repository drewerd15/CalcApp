import React, { Component } from "react";
import { connect } from "react-redux";
import { FormBuilder } from "@ginkgo-bioworks/react-json-schema-form-builder";
import { getCalculatorSchemaThunk } from "../store/CalculatorReducer";
//import { FormSuite } from "./FormSuite";

class EditCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: "",
      uischema: "",
    };
  }

  componentDidMount() {
    this.props.getCalculatorSchema(this.props.match.params.id);
    console.log(`this.props`, this.state);
    //   const [schema, setSchema] = React.useState(JSON.stringify(this.props.schema));
    // const [uischema, setUischema] = React.useState(
    //   JSON.stringify(this.props.uischema),
    // );
    if (this.props.schema && this.props.schema.length > 0) {
      this.setState({
        schema: this.props.schema,
        uischema: this.props.uischema,
      });
    }
  }

  render() {
    const setSchema = null;
    const setUischema = null;
    return (
      <div>
        <div>something</div>
        <FormBuilder
          schema={this.state.schema}
          uischema={this.state.uischema}
          schemaTitle="Data Schema"
          uischemaTitle="UI Schema"
          onChange={(newSchema, newUiSchema) => {
            console.log(`this.state`, JSON.stringify(this.state.schema));
            // setSchema(newSchema);
            // setUischema(newUiSchema);
            this.setState({
              schema: newSchema,
              uischema: newUiSchema,
            });
            // onChange={(newSchema, newUiSchema) => {
            //   console.log(`this.state`, JSON.stringify(this.state.schema));
            //   this.setState({
            //     schema: newSchema,
            //     uischema: newUiSchema,
            //   });
          }}
        />
        <button
          id="saveEditor"
          type="button"
          onClick={() => this.props.saveCalculator(this.props.match.params.id)}
        >
          Save Calculator
        </button>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    username: state.auth.username,
    // schema: state,

    schema: state.CalculatorReducer.schema,
    uischema: state.CalculatorReducer.uischema,

    // uischema: state.calculatorReducer.uischema,
    // uischema: state.calculator.uischema,
  };
};
const mapDispatch = (dispatch) => ({
  // getCalcFunc : () => dispatch(getCalculatorsList()),
  saveCalculator: (id) => dispatch(setCalculatorSchemaThunk(id)),
  getCalculatorSchema: (id) => dispatch(getCalculatorSchemaThunk(id)),
});

export default connect(mapState, mapDispatch)(EditCalculator);
