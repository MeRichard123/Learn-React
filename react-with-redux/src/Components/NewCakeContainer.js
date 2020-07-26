import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux";

function NewCakeContainer({ numbOfCakes, buyCake }) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {numbOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyCake(number)}>Buy {number} cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numbOfCakes: state.cake.numbOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
