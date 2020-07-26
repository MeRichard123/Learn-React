import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux";

function CakeContainer({ numbOfCakes, buyCake }) {
  return (
    <div>
      <h2>Number of Cakes - {numbOfCakes}</h2>
      <button onClick={buyCake}>Buy Cakes</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
