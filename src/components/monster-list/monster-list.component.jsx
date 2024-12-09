import { Component } from "react";

import "./monster-list.style.css";
import Card from "../card/card.component";

class MonsterList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default MonsterList;
