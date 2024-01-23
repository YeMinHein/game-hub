import CriticScore from "./CriticScore";
import Platform from "./Platform";
import { Games } from "../hook/useGame";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import Emojis from "./Emojis";
import Like from "./LikeButton";
interface Props {
  game: Games;
}
const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <Platform
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>
            {game.name}
            <Like
              onClick={() => {
                game.id;
                console.log(game.id);
              }}
            />
            <Emojis rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
