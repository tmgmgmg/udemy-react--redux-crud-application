import React from "react";

// function App() {
//   return (<h1>Hello, World!</h1>
//   );
// }

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick={() => { console.log("I am clicked") }} />
//     </React.Fragment>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

// function App() {
//   const greeting = "Hi,Tom";
//   const dom = <h1 className="foo">{greeting}</h1>;
//   return dom;
// }

// function App() {
//   const dom = <h1>Hi!</h1>
//   return dom;
// }

// function App() {
//   return React.createElement(
//     "div",
//     "null",
//     "Hello,world!!"
//   );
// }

export default App;
