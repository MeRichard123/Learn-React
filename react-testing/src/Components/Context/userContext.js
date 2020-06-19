import React from "react";

// createContext parameter default value is RichardMe123
// This is used when a component doesn't have a provider
const UserContext = React.createContext("RichardMe123");

// every object from create context comes with a provideer and consumer
// See Component E to see how that is passed forward
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
