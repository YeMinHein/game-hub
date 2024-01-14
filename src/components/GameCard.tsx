import CriticScore from "./CriticScore";
import Platform from "./Platform";
import { Games } from "../hook/useGame";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  game: Games;
}
const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent="space-between">
            <Platform
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
