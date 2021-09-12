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
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname" },
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}


const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old.</div>
}

User.defaultProps = {
  age: 1
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
