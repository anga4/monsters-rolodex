import { Component } from "react";

import MonsterList from "./components/monster-list/monster-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users, filteredMonsters: users };
          },
          () => console.log(this.state)
        )
      );
  }

  onSearchChange = (e) => {
    const searchString = e.target.value.toLowerCase();
    this.setState({ searchString });
  };

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    );
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>

        <SearchBox
          onSearchChange={onSearchChange}
          className="monster-search-box"
          placeholder="search monsters"
        />

        <MonsterList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
