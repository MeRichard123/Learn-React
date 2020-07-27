import { BUY_CAKE } from "../Constants/cakeTypes";

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

// This is an action creator this is what is dispatched when the sates need changing.
