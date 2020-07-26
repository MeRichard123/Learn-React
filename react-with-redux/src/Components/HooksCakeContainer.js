import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux";

function HooksCakeContainer() {
  const numbOfCakes = useSelector((state) => state.cake.numbOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes - {numbOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
