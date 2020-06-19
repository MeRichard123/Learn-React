/*
Used for state management
The useReducer hook is an alternative to the useState hook.
It is used to manage state.
The useState hook uses the a useReducer under the hood. 
A Javascript reducer function will return one value which would be a combination of the array
e.g a sum, 
The reduce method takes two parameters the first being the reducer function and the second
being the initial value.
The reducer function takes two params and returns one value.
In React:
useReducer(reducerFunction,initialState)
newState = reducer(currentState,action)
useReducer returns a pair of value [newState,dispatch]
*/
export { default as CounterOne } from "./Counters/CounterOne";
export { default as CounterTwo } from "./Counters/CounterTwo";
export { default as CounterThree } from "./Counters/CounterThree";
export { default as ReducerA } from "./ReducerAndContext/ComponentA";
export { default as ReducerB } from "./ReducerAndContext/ComponentB";
export { default as ReducerC } from "./ReducerAndContext/ComponentC";
export { default as StateFetch } from "./DataFetching/DataFetchingOne";
export { default as ReducerFetch } from "./DataFetching/DataFetchingTwo";

/*
useState vs useReducer
=========================

Scenario              |       useState          |      useReducer
===========================================================
Type of state        |   Number,String,Bool    |  Object,Array
State Transitions   |   one or two            | too many
Related Transitions|    No                   |   Yes
Business Logic     |    No Business Logic   |   Complex Business Logic
Local VS Global   |    Local               |    Global
*/
