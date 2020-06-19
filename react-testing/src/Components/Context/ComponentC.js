import React, { Component } from "react";
import styled from "styled-components";
import ComponentE from "./ComponentE";

/*
Context provides a way to pass data through a component tree without having to pass props down manually 
1. Create the Context -> userContext.js
2. Provide the context Value -> In app.js
3. Consume the Context value  -> In component F
 */

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: tomato;
`;
const FancyTitle = styled.h1`
    font-size: 5rem;
    color: white;
    text-align-center;
`;
const Paragraph = styled.p`
  color: white;
  text-align: center;
  width: 50%;
`;

export class ComponentC extends Component {
  render() {
    return (
      <Wrapper>
        <FancyTitle>React Context</FancyTitle>
        <Paragraph>
          Context provides a way to pass data through a component tree without
          having to pass props down manually
        </Paragraph>
        <ComponentE />
      </Wrapper>
    );
  }
}

export default ComponentC;
