import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
interface Games {
  id: number;
  name: string;
}
interface FetchGamesReponse {
  count: number;
  results: Games[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGamesReponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
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
