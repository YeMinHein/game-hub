import useGames, { platform } from "../hook/useGame";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hook/useGenres";
interface Props {
  selectGenre: Genre | null;
  slectorPlatform: platform | null;
}
const GameGrid = ({ selectGenre, slectorPlatform }: Props) => {
  const { data, error, loding } = useGames(selectGenre, slectorPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={3}
      >
        {loding &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
