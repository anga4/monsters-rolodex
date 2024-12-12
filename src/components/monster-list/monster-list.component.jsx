import "./monster-list.style.css";
import Card from "../card/card.component";

const MonsterList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster, i) => (
        <Card key={i} monster={monster} />
      ))}
    </div>
  );
};

export default MonsterList;
