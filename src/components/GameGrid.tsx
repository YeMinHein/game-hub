import useGames from "../hook/useGame";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, loding } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={10}
      >
        {loding &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
