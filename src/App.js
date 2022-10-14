import logo from './logo.svg';
import './App.css';
import { Component, useState } from "react"

class App extends Component {
  
  constructor(){
    super();
   this.state = {
    name: {firstName: "Ignacio", lastName: "Yz"},
    style: 'front-end, React'
  }
}




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, my name is {this.state.name.firstName} {this.state.name.lastName}, my style is {this.state.style}
          </p>
         <button onClick={() => { 
          this.setState(() => {
           return{
            name:{firstName:"Henry", lastName:"Jeria", style: "Musician"},
            style:"musician"
           }
          });
            console.log(this.state)
          }}>Change Name</button> 
        </header>
      </div>
    );
  }
}

export default App;
