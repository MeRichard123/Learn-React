import React, { useState, useCallback } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>incrementAge</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>incrementSalary</Button>
    </div>
  );
}

export default ParentComponent;

/*
This is for performance optimization
=====================================

With lots of components like this when a value updates every single component here will re-render.
This can be optimized with React.memo which will prevent a functional component from re-rendering if props
of state don't change. react.memo is a HOC
--> See Child components 
However both buttons still re=renders because a new increment salary function is created each
time a re=render happens. This means the ref is different upon re-render so meaning the memo sees a change in 
props. To tell react that there is new need to make a new function you can you the use callback hook.

What?
useCallback is a hook that will return a memoized version of the Callback function that only changes
if one of the dependencies has changed
s
Why?
It is useful when passing callbacks to optimized child components that rely on reference equality 
to prevent unnecessary re-renders
Reference Equality => checking if functions are equal.



function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = () => {
    setAge(age + 1);
  };
  const incrementSalary = () => {
    setSalary(salary + 1000);
  };
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>incrementAge</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>incrementSalary</Button>
    </div>
  );
}

export default ParentComponent;
*/
