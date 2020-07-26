import React from "react";
import { connect } from "react-redux";
import { buyIceCream, buyCake } from "../Redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numbOfCakes
    : state.iceCream.numbOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
// if you don't want map state to props just pass null
