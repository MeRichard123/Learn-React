import { BUY_ICECREAM } from "../Types/iceCreamTypes";

const initialState = {
  numbOfIceCreams: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      if (state.numbOfIceCreams > 0) {
        return {
          ...state,
          numbOfIceCreams: state.numbOfIceCreams - 1,
        };
      } else {
        return { ...state, numbOfIceCreams: "Out of Stock" };
      }
    default:
      return state;
  }
};

export default iceCreamReducer;
