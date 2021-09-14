import React, { Component } from "react";


const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return (
      <React.Fragment>
        <div>count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
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
