A High order component is one where a function takes a component as an argument and returns a new component

> > > const NewComponent = higherOrderComponent(originalComponent)

This can be used like so

```
export default WithCounter(ClickCounter, 5);
```

See how to make one in withCounter.js

withCounter and wrappedComponent are naming convensions
