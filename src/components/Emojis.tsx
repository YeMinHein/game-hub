import React from "react";
import meh from "../assets/meh.webp";
import bulls from "../assets/bulls-eye.webp";
import thumb from "../assets/thumbs-up.webp";
import { GameQuery } from "../App";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumb, alt: "recomend", boxSize: "25px" },
  5: { src: bulls, alt: "expection", boxSize: "35px" },
};
const Emojis = ({ rating }: Props) => {
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emojis;
