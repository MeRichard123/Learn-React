import React, { useState } from "react";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/Store";

import "./App.css";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import SubwayContainer from "./Components/SubwayContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";
import UserContainer from "./Components/UserContainer";

function App() {
  const [app, switchApp] = useState(true);
  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={{ letterSpacing: "15px" }}>REDUX!!</h1>
        <button onClick={() => switchApp(!app)}>Switch App</button>
        <hr />
        {app ? <AppOne /> : <UserContainer />}
      </div>
    </Provider>
  );
}
function AppOne() {
  return (
    <div>
      <ItemContainer />
      <ItemContainer cake />
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <SubwayContainer />
      <NewCakeContainer />
    </div>
  );
}

export default App;
