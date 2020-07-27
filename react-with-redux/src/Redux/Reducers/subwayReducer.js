import { BUY_SUBWAY } from "../Constants/subwayTypes";

const initialState = {
  numbOfSubs: 80,
};

const subwayReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SUBWAY:
      if (state.numbOfSubs > 0) {
        return {
          ...state,
          numbOfSubs: state.numbOfSubs - 1,
        };
      } else {
        return { ...state, numbOfSubs: "Out of Stock" };
      }
    default:
      return state;
  }
};

export default subwayReducer;
