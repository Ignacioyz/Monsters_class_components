import logo from './logo.svg';
import './App.css';
import { Component, useState } from "react"

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Linda",
          id:1
        },
        {
          name: "Frank",
          id:2
  
        },
        {
          name: "Jacky",
          id:3,
        }, 
        {
        name: 'Andrei',
        id:4
        }
      ]
    }
  }




  render() {
    return (
      <div className="App">
        {
         this.state.monsters.map((monster) => {
          return <h1 key={monster.id} >{monster.name}</h1>
         }) 
        }
      </div>
    );
  }
}

export default App;
