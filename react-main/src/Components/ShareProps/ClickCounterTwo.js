import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background: steelblue;
  border: 0;
  color: white;
  padding: 0.5rem 2rem;
  transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)

  :focus {
    outline: none;
  }
  :hover,
  :active {
    color: steelblue;
    background: white;
  }
`;

export class ClickCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <Button onClick={incrementCount}>Click {count} times</Button>
      </div>
    );
  }
}

export default ClickCounterTwo;
