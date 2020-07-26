import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../Redux";

function IceCramContainer({ numbOfIceCreams, buyIceCream }) {
  return (
    <div>
      <h2>Number of Ice Creams - {numbOfIceCreams}</h2>
      <button onClick={buyIceCream}>Buy Ice Cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numbOfIceCreams: state.iceCream.numbOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCramContainer);
