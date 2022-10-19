import logo from './logo.svg';
import './App.css';
import { Component, useState } from "react"

class App extends Component {

  constructor() {
    super();
    this.state = {
      // initializing the data list as empty first. 
      monsters: [],
    }
  }
  // how do we get the data list, where does it render, and when do I get the list? When does it render/rerender? 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          () => {
            return { monsters: data };
          },
          () => {
            console.log(this.state)
          }
        )
      );
  }


  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div>
              <h1 key={monster.id}> {monster.name} </h1>
            
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
