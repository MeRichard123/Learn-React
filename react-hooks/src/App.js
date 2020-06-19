import React, { useReducer } from "react";
import "./App.css";

import {
  ClassCounter,
  ClassCounterPrevState,
  HookCounter,
  HookCounterArrays,
  HookCounterObjects,
  HookCounterPrevState,
} from "./Components/UseState";

import {
  ClassEffect,
  EffectComponent,
  ClassMouse,
  MouseContainer,
  IntervalClassCounter,
  IntervalHookCounter,
  DataFetching,
} from "./Components/UseEffect";

import {
  CounterOne,
  CounterTwo,
  CounterThree,
  ReducerA,
  ReducerB,
  ReducerC,
  StateFetch,
  ReducerFetch,
} from "./Components/UseReducer";
import ComponentC from "./Components/UseContext/ComponentC";
import ParentComponent from "./Components/UseCallback/ParentComponent";
import Counter from "./Components/UseMemo/Counter";
import FocusInputs from "./Components/UseRefs/FocusInputs";
import ClassTimer from "./Components/UseRefs/ClassTimer";
import HookTimer from "./Components/UseRefs/HookTimer";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <hr />
      <ClassCounterPrevState />
      <HookCounterPrevState />
      <hr />
      <HookCounterObjects />
      <hr />
      <HookCounterArrays />
      <hr />
      <h1>UseEffect Hook</h1>
      <ClassEffect />
      <p>Using Hooks</p>
      <EffectComponent />
      <ClassMouse />
      <MouseContainer />
      <h2>Interval count</h2>
      <IntervalClassCounter />
      <IntervalHookCounter />
      <hr />
      <h1>Fetching Data</h1>
      <DataFetching />
      <hr />
      <h1>UseContext API</h1>
      <UserContext.Provider value={"Richard"}>
        <ChannelContext.Provider value={"@me_richard1"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <hr />
      <h1>UseReducer</h1>
      <CounterOne />
      <p>Version Two</p>
      <CounterTwo />
      <p>Version 3</p>
      <CounterThree />
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div className="context">
          <p>Global State between Components</p>
          <h2>Count from App.js - {count}</h2>
          <ReducerA />
          <ReducerB />
          <ReducerC />
        </div>
      </CountContext.Provider>
      <h2>Fetch Data with UseReducer vs UseState</h2>
      <StateFetch />
      <p>Using Reducer</p>
      <ReducerFetch />
      <hr />
      <h1>UseCallback Hook</h1>
      <ParentComponent />
      <hr />
      <h1>UseMemo Hook</h1>
      <Counter />
      <hr />
      <h1>UseRef Hook</h1>
      <FocusInputs />
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
