import axios from "axios";
import history from "../history";

const initialState = {
  calculatorDesign: {},
  calculators: {},
};

const SET_CALCULATORS = "SET_CALCULATORS";
const GET_CALCULATORS = "GET_CALCULATORS";
const SET_CALCULATOR_DESIGN = "SET_CALCULATOR_DESIGN";
const GET_CALCULATOR_DESIGN = "GET_CALCULATOR_DESIGN";

const setCalculators = (calculators) => ({
  type: SET_CALCULATORS,
  calculators,
});

const getCalculators = (calculators) => ({
  type: GET_CALCULATORS,
  calculators,
});
const setCalculatorDesign = (design) => ({
  type: SET_CALCULATOR_DESIGN,
  design,
});

const getCalculatorDesign = (design) => ({
  type: GET_CALCULATOR_DESIGN,
  design,
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
export const setCalculatorDesignThunk = (id, calculator) => {
  const token = window.localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const { data: design } = await axios.post(`/api/calculators/${id}`, {
        headers: {
          authorization: token,
        },
        calculator,
      });
      dispatch(setCalculatorDesign(design));
    } catch (e) {
      console.log(e);
    }
  };
};
//fix method here
export const getCalculatorDesignThunk = (id) => {
  const token = window.localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const { data: design } = await axios.get(`/api/calculators/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(getCalculatorDesign(design));
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
    case SET_CALCULATOR_DESIGN: {
      return { ...state, calculator: action.design };
    }
    case GET_CALCULATOR_DESIGN: {
      console.log(`action`, action);
      return {
        ...state,
        design: action.design[0].design,
      };
    }
    default:
      return state;
  }
}
