import React, {Component} from 'react';
import CardList from './CardList.js';
import './App.css';

const theUrl = 'https://api.github.com/users/';
const buddies = ['allisonhomem', 'stevenjhomem', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

class App extends Component {
  constructor(){
    super();
    this.state = {
      buddyArray: buddies,
      url: theUrl
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1> Code Buddies </h1>
        </header>

        <CardList buddyArray={this.state.buddyArray} url={this.state.url}/>
      </div>
    );
  }
}

export default App;
