import './App.css';
import { Component } from "react"

class App extends Component {

  constructor() {
    super();
    this.state = {
      // initializing the data list as empty first. 
      monsters: [],
    };
    console.log('constructor')
  };
  // how do we get the data list, where does it render, and when do I get the list? When does it render/rerender? 
  componentDidMount() {
    console.log('componentDidMount')
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
    console.log('render')
    return (
      <div className="App">
        <input className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(e) => {
            // because .includes is case sensetive 
            const searchString = e.target.value.toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchString)
            });
            this.setState(() => {
              return { monsters: filteredMonsters };
            })
          }}/>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1> {monster.name} </h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
