---
path: "/components-and-props"
title: "Components & Props"
order: "2H"
section: "React Bootcamp"
description: "React bootcamp @GirlScript-Gujarat Summit by Darsh Shah."
---

### Function & Class Components

**Normal Functional component**

```js
function HelloWorld(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**es6 Arrow function component**

```js
const HelloWorld = props => {
  return <h1>Hello, {props.name}</h1>;
};
```

**Class Component**

```js
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- The above components are equivalent from React’s point of view.
- In class components, you can use different lifecycle methods but you can't use it in functional components
- After React 16.8, Hooks were introduced for letting you use state and other React features without writing a class.

> 💡 TLDR; For understanding `props`, we will be refering the `React Official Documentation` to get better understanding. [Rendering a Component](https://reactjs.org/docs/components-and-props.html#rendering-a-component)
