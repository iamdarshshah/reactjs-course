---
path: "/intro-to-cra"
title: "Intro to create-react-app"
order: "2H"
section: "React Bootcamp"
description: "React bootcamp @GirlScript-Gujarat Summit by Darsh Shah."
---

Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

#### Quick Start

```shell
npx create-react-app my-app
cd my-app
npm start
```

> ❗️NOTE: npx on the first line is not a typo — it’s a package runner tool that comes with npm 5.2+. If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` to ensure that `npx` always uses the latest version. For more details check [here](https://create-react-app.dev/docs/getting-started/)

- Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.

#### JavaScript build toolchain

- `Yarn` & `npm`: They are the **_Package manager_**. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.

- `webpack` & `Parcel`: They are the **_bundler_**. It lets you write modular code and bundle it together into small packages to optimize load time.

- `Babel`: A **_compiler_**. Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.

> 👍 TIP: If you want to know more about create-react-app, check this out: [reactjs.org](https://reactjs.org/docs/create-a-new-react-app.html) & [official docs](https://create-react-app.dev/)
