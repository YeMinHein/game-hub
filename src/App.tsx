import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useEffect, useState } from "react";
import { Genre } from "./hook/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { platform } from "./hook/useGame";
import Platform from "./components/Platform";
function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<platform | null>(
    null
  );
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenre={selectGenre}
            onSelecGenre={(genre) => setSelectGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          seletedPlatform={selectedPlatform}
          onSelectPlatform={(Platform) => setSelectedPlatform(Platform)}
        />
        <GameGrid
          slectorPlatform={selectedPlatform}
          selectGenre={selectGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
