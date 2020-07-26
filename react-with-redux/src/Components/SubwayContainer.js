import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buySub } from "../Redux";

function SubwayContainer() {
  const numberOfSubs = useSelector((state) => state.subway.numbOfSubs);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Subways - {numberOfSubs}</h2>
      <button onClick={() => dispatch(buySub())}>Buy Subway</button>
    </div>
  );
}

export default SubwayContainer;
