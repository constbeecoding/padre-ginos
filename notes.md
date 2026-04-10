# Dev Notes

## Cool Vite Stuff

So to run the Pizza Api, we have the code below. Which allows us to run the api and our React code on the same/similar port for a local server with [fastify](https://fastify.dev/). So we can run a Fastify Node.js App with a SQLite database. Adding a proxy config allows us to run the FE and Backend on the same port and avoid CORS(Cross-Origin Resource Sharing) issues by proxying API and public requests to localhost:3000. We're proxying /api and /public here.

```mjs
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
```

## JSX Stuff

Example if you want a NAMED export:

```jsx
export const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
};
```

In this case, you'd have to import this in App.js within {} as an import { Pizza } from "./Pizza"; Then you can export several consts in one file like import { Pizza, Blah } from "./Pizza"; HOWEVER, it should and can be ONE FILE = ONE COMPONENT therefore "export default"
works fine. WHO CARES, don't get hung up on debates lol.

You also no longer have to write:`import React from "react";`
New tools recognize .jsx and automatically import React so it isn't required. May still exist in older code bases.

- `class` is a reserved name in JavaScript so we have to use className
- `for` is reservered in JS as well (for loops, etc), so we have to use htmlFor=""
- `<input>` is valid html, but not valid JSX, you have to add a self closing tag `<input />`
- lowercase tags at a glance are easy to see what is a native DOM component vs what is a user-created component, which is Capitalized.
-

## Named Functions vs Anon Functions

Named (easier to debug will show up in Stack Trace "Order")

```jsx
export default function Order() {}
```

Anon (will show up as coming from "Pizza" Component but not the name of the function)

```jsx
const Pizza = (props) => {};
```

## Hook Rules

Gets called in the same order every single time in render functions. Strict Ordering.

You can't use them inside conditionals. For Loops, While Loops, Do Loops, etc. Always top level.

They depend on being called in the same order each time. In conditionals sometimes they can be called out of order. For example in this app Medium could show up in Pizza Type rather than Pizza Size which doesn't make sense and isn't what we want.

```jsx
if (lol) {
  useState;
}
```

## Effects

Note from [React Docs](https://react.dev/learn/you-might-not-need-an-effect):

```quote
Effects are an escape hatch from the React paradigm. They let you “step outside” of React and synchronize your components with some external system like a non-React widget, network, or the browser DOM. If there is no external system involved (for example, if you want to update a component’s state when some props or state change), you shouldn’t need an Effect. Removing unnecessary Effects will make your code easier to follow, faster to run, and less error-prone.
```

Controlling when something is rendered/called (for example fetching data from an API), we want it to run ONCE. Not EVERY TIME a component is rendered. Just when a component first loads.

We can say for example "Hey, only when this is different from the PREVIOUS render, do this action again." With a second param within the array below [pizzaSize].

```jsx
async function fetchPizzaTypes() {
  const pizzaRes = await fetch("/api/pizzas");
  const pizzaJson = await pizzaRes.json();
  setPizzaTypes(pizzaJson);
  setLoading(false);
}

useEffect(() => {
  fetchPizzaTypes();
}, [pizzaSize]);
```

But if we only want it to run ONCE without tracking any variables we would leave it an empty array like so:

```jsx
async function fetchPizzaTypes() {
  const pizzaRes = await fetch("/api/pizzas");
  const pizzaJson = await pizzaRes.json();
  setPizzaTypes(pizzaJson);
  setLoading(false);
}

useEffect(() => {
  fetchPizzaTypes();
}, []);
```

\*Remember an async function returns promises. (With useEffect the return type matters, and you have to provide a cleanup function see docs [React: useEffect](https://react.dev/reference/react/useEffect#:~:text=You%20can%20also%20rewrite%20using%20the%20async%20/%20await%20syntax%2C%20but%20you%20still%20need%20to%20provide%20a%20cleanup%20function%3A))
