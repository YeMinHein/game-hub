import useGames from "../hook/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "../GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
