import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../../App";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <ComponentF />
      <p>
        ComponentE Context {user} - {channel}
      </p>
    </div>
  );
}

export default ComponentE;
