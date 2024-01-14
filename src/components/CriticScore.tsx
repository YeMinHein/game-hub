import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 80 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="10px" padding={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
