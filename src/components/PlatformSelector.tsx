import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import usePlatforms from "../hook/usePlatform";
import { platform } from "../hook/useGame";

interface Props {
  onSelectPlatform: (platform: platform) => void;
  seletedPlatform: platform | null;
}
const PlatformSelector = ({ onSelectPlatform, seletedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<TriangleDownIcon boxSize={3} marginTop={1} />}
      >
        {seletedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((Platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(Platform)}
            key={Platform.id}
          >
            {Platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
