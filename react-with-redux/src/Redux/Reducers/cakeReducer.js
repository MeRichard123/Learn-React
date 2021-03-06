import { BUY_CAKE } from "../Constants/cakeTypes";

const initialState = {
  numbOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.numbOfCakes > 0) {
        return { ...state, numbOfCakes: state.numbOfCakes - action.payload };
      } else {
        return { ...state, numbOfCakes: "Out of Stock" };
      }

    default:
      return state;
  }
};

export default cakeReducer;

// This is where the magic happens. It determines what happens to the sate.
