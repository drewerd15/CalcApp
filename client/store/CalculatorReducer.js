import axios from "axios";
import history from "../history";

const initialState = {};

const SET_CALCULATORS = "SET_CALCULATORS";
const GET_CALCULATORS = "GET_CALCULATORS";

const setCalculators = (calculators) => ({
  type: SET_CALCULATORS,
  calculators,
});

const getCalculators = (calculators) => ({
  type: GET_CALCULATORS,
  calculators,
});

//return an array of all calculators for a user
export const getCalculatorsList = () => {
  const token = window.localStorage.getItem("token");
  return (dispatch) => {
    axios
      .get("/api/calculators", {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        console.log(
          `getCalculators(response.data)`,
          getCalculators(response.data)
        );
        dispatch(getCalculators(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default function CalculatorReducer(state = {}, action) {
  switch (action.type) {
    case SET_CALCULATORS: {
      console.log(`some random string`, action);

      return action.calculators;
    }
    case GET_CALCULATORS: {
      console.log(`some random string`, action);
      return action.calculators;
    }
    default:
      return state;
  }
}
