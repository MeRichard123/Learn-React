# Life Cycle methods

When we make a component its goes through several stages in
its lifecycle react gives us methods to overwrite stages in a life cycle.

## We can classify the methods into 4 stages:

- ### Mounting -> Called when an instance of a component is created and insterted into the DOM. There are 4 methods:

        - constructor ->
            - Called upon component creation
            - good for initalizing state
            - and binding event handlers
            - Don't cause side effects like HTTP requests
            - `super(props)` overwrites this.state

        - static getDerivedStateFromProps ->
            - Rarely used
            - state of component depends on changes in props over time
            - Static so no access to ```this```
            - can't call this.setSate need to return an object representing state
            - Don't cause side effects like HTTP requests

        - render ->
            - Only required method
            - Reads the props and returns JSX
            - Don't change state or interact with the DOM here or make AJAX calls
            - Children component lifecycle methods are also executed.

        - componentDidMount ->
            - Called only once
            - Invoked immediately after a component and all its children have rendered
            - Good for causing side effects i.e DOM interaction or AJAX calls

- ### Updating -> Called when a component is rerenderd as a result to changes in props of state. There are 5 methods:

        - static getDerivedStateFromProps ->
            - Params: nextProps, nextSate
            - Called every time a component is re-rendered
            - Set the state
            - Dont Cause side effects

        - shouldComponentUpdate ->
            - Dictates if a component should re-render or not
            - By Default a component will update when state changes
            - Performance optimization
            - Avoid HTTP requests and setState
            - Rarely used

        - render ->
            - Only required method
            - Reads the props and returns JSX
            - Don't change state or interact with the DOM here or make AJAX calls
            - Children component lifecycle methods are also executed.

        - getSnapshotBeforeUpdate ->
            - params: prevProps, prevState
            - Called before the DOM Changes from the virtual DOM are reflected in the DOM
            - Capture DOM info
            - return Null or a value passed as a third parameter to the next method

        - componentDidUpdate(prevProps,prevState,snapshot) ->
            - Called after the render is finished in the re-render cycles
            - Cause Side effects as its only called once
            - Before call compare prev props with new props and decide whether to call

- ### Unmounting-> called when a component is removed from the DOM. There is one method:

        - componentWillUnmount ->
            - Invoked immediately after component is destroyed
            - Uses: Cancelling network requests, removing event handlers....
            - Don't call setState

- ### Error Handling -> Called when an error occurs during rendering, in a lifecycle method, or in the constuctor of any child component. There are 2 methods:

        - static getDerivedStateFromError(error)
        - componentDidCatch(error,info)
        - Error Boundary - A component that implements both of these methods.
