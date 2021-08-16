import axios from "axios";
import history from "../history";

const initialState = {
  schema: {},
  uischema: {},
  calculators: {},
};

const SET_CALCULATORS = "SET_CALCULATORS";
const GET_CALCULATORS = "GET_CALCULATORS";
const SET_CALCULATOR_SCHEMA = "SET_CALCULATOR_SCHEMA";
const GET_CALCULATOR_SCHEMA = "GET_CALCULATOR_SCHEMA";

const setCalculators = (calculators) => ({
  type: SET_CALCULATORS,
  calculators,
});

const getCalculators = (calculators) => ({
  type: GET_CALCULATORS,
  calculators,
});
const setCalculatorSchema = (schema) => ({
  type: SET_CALCULATOR_SCHEMA,
  schema,
});

const getCalculatorSchema = (schema) => ({
  type: GET_CALCULATOR_SCHEMA,
  schema,
});

//return an array of all calculators for a user
// export const getCalculatorsList = () => {
//   const token = window.localStorage.getItem("token");
//   return (dispatch) => {
//     axios
//       .get("/api/calculators", {
//         headers: {
//           authorization: token,
//         },
//       })
//       .then((response) => {
//         console.log(
//           `getCalculators(response.data)`,
//           getCalculators(response.data)
//         );
//         dispatch(getCalculators(response.data));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
export const getCalculatorsList = () => {
  const token = window.localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const { data: calculators } = await axios.get("/api/calculators", {
        headers: {
          authorization: token,
        },
      });
      dispatch(getCalculators(calculators));
    } catch (e) {
      console.log(e);
    }
  };
};
//fix method here
export const setCalculatorSchemaThunk = () => {
  const token = window.localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const { data: schema } = await axios.post("/api/calculators/:id", {
        headers: {
          authorization: token,
        },
      });
      dispatch(setCalculatorSchema(schema));
    } catch (e) {
      console.log(e);
    }
  };
};
//fix method here
export const getCalculatorSchemaThunk = (id) => {
  const token = window.localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const { data: schema } = await axios.get(`/api/calculators/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(getCalculatorSchema(schema));
    } catch (e) {
      console.log(e);
    }
  };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CALCULATORS: {
      return action.calculators;
    }
    case GET_CALCULATORS: {
      return { ...state, calculators: [action.calculators] };
    }
    case SET_CALCULATOR_SCHEMA: {
      return { ...state, calculator: action.schema };
    }
    case GET_CALCULATOR_SCHEMA: {
      console.log(`action`, action);
      return {
        ...state,
        schema: action.schema[0].schema,
        uischema: action.schema[0].uischema,
      };
    }
    default:
      return state;
  }
}
