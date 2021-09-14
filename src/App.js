import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import myNews from './myNews';
import './App.Css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header myNews={myNews}/>
        <About myNews={myNews}/>
        <Portfolio myNews={myNews}/>
        <Footer myNews={myNews}/>
      </div>
    );
  }
}

export default App;
