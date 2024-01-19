import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
interface Props {
  onSelectSortOrder: (SortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const SortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-reating", label: "Average Reating" },
  ];

  const currentSortOrder = SortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<TriangleDownIcon boxSize={3} marginTop={1} />}
      >
        Order By : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {SortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
