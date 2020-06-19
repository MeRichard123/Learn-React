import React from "react";
import { UserContext, ChannelContext } from "../../App";

// We want to get data from app to here which is layered though many components
// without having to pass through component C and E
// The hook allows you to consume many contexts without so much nesting
// See component E

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User Context Value {user}, Channel Context {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
