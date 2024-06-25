import React, { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing((editing) => !editing);

    if(isEditing){
      onChangeName(symbol, playerName)
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value)
  }

  let inputPlayer = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    inputPlayer = <input type="text" required value={playerName} onChange={handleChange} />;
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {inputPlayer}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>
          {!isEditing ? "Edit" : "Save"}
        </button>
      </li>
    </>
  );
}
