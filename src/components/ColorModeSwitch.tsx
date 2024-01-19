import { HStack, Text, useColorMode, Switch } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const darkmode = (
    <button
      type="button"
      className="chakra-button"
      aria-label="Switch to light mode"
      onClick={toggleColorMode}
    >
      <MoonIcon color="green" boxSize={6} />
    </button>
  );
  const lightmode = (
    <button
      type="button"
      className="chakra-button"
      aria-label="Switch to dark mode"
      onClick={toggleColorMode}
    >
      <SunIcon color="green" boxSize={6} />
    </button>
  );
  return <HStack>{colorMode === "dark" ? lightmode : darkmode}</HStack>;
};

export default ColorModeSwitch;
