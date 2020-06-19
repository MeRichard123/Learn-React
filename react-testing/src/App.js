import React from "react";
import logo from "./logo.svg";
import Form from "./Components/Form";
import LifecycleA from "./Components/Lifecycle Methods/LifecycleA";
import Fragments from "./Components/Fragments/Fragments";
import Table from "./Components/Fragments/Table";
import ParentComponent from "./Components/PureComponents/ParentComponent.js";
import "./App.css";
import RefsDemo from "./Components/Refs/RefsDemo";
import Portal from "./Components/Portal";
import Error from "./Components/Lifecycle Methods/Errors";
import ErrorBoundary from "./Components/Lifecycle Methods/ErrorBoundary";
import ClickCounter from "./Components/HOC/ClickCounter";
import HoverCounter from "./Components/HOC/HoverCounter";
import ClickCounterTwo from "./Components/ShareProps/ClickCounterTwo";
// import User from "./Components/ShareProps/User";
import Counter from "./Components/ShareProps/Counter";
import ComponentC from "./Components/Context/ComponentC";
import { UserProvider } from "./Components/Context/userContext";
import PostList from "./Components/HTTP/PostList";
import PostForm from "./Components/HTTP/PostForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Woo Learning React!</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form />
      <LifecycleA />
      <div className="fragmentContainer">
        <Fragments />
        <Table />
      </div>
      <ParentComponent />
      <RefsDemo />
      <Portal />
      <div className="hero">
        {/* Wrapping each component in the error boundary will allow the others to still display */}
        <ErrorBoundary>
          <Error heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Error heroName="Superman" />
        </ErrorBoundary>
        {/* <ErrorBoundary>
          <Error heroName="Joker" />
        </ErrorBoundary> */}
        <ClickCounter name="Richard" />
        <HoverCounter />
        {/* <User render={(isLoggedIn) => (isLoggedIn ? "Richard" : "Guest")} /> */}
        <Counter>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter>
      </div>
      <UserProvider value="Data-Richard">
        <ComponentC />
      </UserProvider>
      <PostList />
      <PostForm />
    </div>
  );
}

export default App;
