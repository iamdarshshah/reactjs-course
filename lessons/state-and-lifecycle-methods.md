---
path: "/state-and-lifecycle-methods"
title: "State & Lifecycle methods"
order: "2I"
section: "React Bootcamp"
description: "React bootcamp @GirlScript-Gujarat Summit by Darsh Shah."
---

### State

- A state is a variable which exists inside a component, that cannot be accessed and modified outside the component and can only be used inside the component.
- Works very similarly to a variable that is declared inside a function that cannot be accessed outside the scope of the function in normal javascript
- `state` can be modified using `this.setState()`.

> ❗️NOTE: `this.setState()` call is asynchronous. It means you won't see the updated value of state just after the `setState` call.

### Commonly Used Lifecycle Methods

_Before we get into Lifecycle methods, we first need to understand what does `mounting` & `unmounting` means?_

- You can think of it as, `setup` and `cleanup`. Simply, `mounting`: adding nodes to the DOM, `unmounting`: removing them from the DOM

##### render()

```js
render();
```

##### constructor()

```js
// If you don’t initialize state and you don’t bind methods,
// you don’t need to implement a constructor for your React component.
constructor(props) {
  // you should call super(props) before any other statement.
  // Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  // `this` binding. Alternate option is to use es6 arrow functions, to avoid this.
  this.handleClick = this.handleClick.bind(this);
}
```

##### componentDidMount()

```
componentDidMount()
```

- `componentDidMount()` is invoked immediately after a component is mounted (inserted into the tree).
- If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

> ❗️NOTE: Keep the last point in mind, we will make use of it in upcoming section.

##### componentDidUpdate()

```
componentDidUpdate(prevProps, prevState)
```

- `componentDidUpdate()` is invoked immediately after updating occurs. _This method is not called for the initial render_.

##### componentWillUnmount()

```
componentWillUnmount()
```

- `componentWillUnmount()` is invoked immediately before a component is **unmounted** and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in `componentDidMount()`.

- You should not call `setState()` in `componentWillUnmount()` because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.

> 💡 TLDR: Every `state` change will leads to an re-render of the application to reflect that particular change.
