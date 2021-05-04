import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/index'
import About from './pages/about'
import Menu from './pages/menu'
import Dropdown from './components/Dropdown'


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/about" component={About}/>
      </Switch>
      <Footer/> 
    </>
  );
}

export default App;
