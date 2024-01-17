import {
  FaWindows,
  FaAndroid,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaXbox,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { platform } from "../hook/useGame";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
interface Props {
  platforms: platform[];
}
const Platform = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    nintendo: SiNintendo,
    xbox: FaXbox,
    playstation: FaPlaystation,
    mac: FaApple,
    ios: MdPhoneIphone,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="green.500" />
      ))}
    </HStack>
  );
};

export default Platform;
