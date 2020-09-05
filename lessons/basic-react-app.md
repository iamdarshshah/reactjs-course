---
path: "/basic-react-app"
title: "Basic React app using Pure JavaScript"
order: "2D"
section: "React Bootcamp"
description: "React bootcamp @GirlScript-Gujarat Summit by Darsh Shah."
---

##### If you haven't switched branch to start yet, please do that because this will include all you need to code for this section.

> 🌲 **branch**: `git checkout start`

_Let's begin 💯, In this section you will get to know about how easy it is to include React in your simple website!_

> 💡 **TLDR**: You know some JavaScript & have worked with HTML before

### All set to start

- As you can notice, it includes a `src` folder & which includes couple of files namely; `index.html` & `app.js`
- it includes the normal html and JavaScript code which we used to do before,
- That's pretty much it. Now will walk you through what we are intended to acheive here.

> ❗️NOTE: if you open `index.html` file, you'll notice certain code is commented and above every comment there will be a comment number. You will have to follow the sequence and uncomment those commented code to acheive the required results. (Will guide you.)

### CDN links

```html
<script
  crossorigin
  src="https://unpkg.com/react@16/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
></script>
```

> 💡 TLDR: for more visit this link; [CDN Links](https://reactjs.org/docs/cdn-links.html)

### Why react and reactDOM differently?

- Both have there own use. As we know `react` will provide us use of some of the top level api's we can use in react-app and `react-dom` is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.

> 💡 TLDR; Read more about [Top-level-api's](https://reactjs.org/docs/react-api.html) & [ReactDOM](https://reactjs.org/docs/react-dom.html)

### API Reference

**createElement()**

```js
React.createElement(type, [props], [...children]);
```

> 👍 Tip: Code written with `JSX` will be compiles down to React.createElement() calls. This will be done by `Babel` (A JavaScript Compiler)
