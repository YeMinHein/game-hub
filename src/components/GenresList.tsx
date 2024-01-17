import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hook/useGenres";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  onSelecGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenresList = ({ selectedGenre, onSelecGenre }: Props) => {
  const { data, loding, error } = useGenres();
  if (loding) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              color={genre.id === selectedGenre?.id ? "green.500" : "normal"}
              onClick={() => onSelecGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
