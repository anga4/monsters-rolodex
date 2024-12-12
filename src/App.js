import { useState, useEffect } from "react";

import MonsterList from "./components/monster-list/monster-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
        setFilteredMonsters(users);
      });
  }, []);

  const onSearchChange = (e) => {
    const searchString = e.target.value.toLowerCase();
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    setFilteredMonsters(newFilteredMonsters);
  };

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
};

export default App;
