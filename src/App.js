// import React, { Component } from "react"
// import logo from "./logo.svg"
// import "./App.css"

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <LambdaDemo />
//         </header>
//       </div>
//     )
//   }
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <Navigation />
      <div>
        {/* initial={false} */}
        <AnimatePresence mode="await">
          <Switch>
            <Route path="//" component={Home} axact></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/skills" component={Skills}></Route>
            <Route path="/contactme" component={Contact}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/success" component={Success}></Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
