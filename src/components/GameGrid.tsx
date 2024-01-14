import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import useGames from "../hook/useGame";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
