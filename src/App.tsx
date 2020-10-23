import React from 'react'
import logo from './logo.svg'
import './App.css'
import { HashRouter, Route, Link, BrowserRouter } from 'react-router-dom'

const Home = () => {
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>This is brand new text</p>
      <p>Adding another paragraph</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
}

const Page = () => {
  return <div>page</div>
}

function App() {
  return (<BrowserRouter>
    <Link to="/">
      home
    </Link>
    <Link to="/page">
      page
    </Link>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/page" exact={true} component={Page}/>
  </BrowserRouter>)
}

export default App
