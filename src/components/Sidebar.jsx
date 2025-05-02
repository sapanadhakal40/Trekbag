import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContextProvider";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  const { handleAddItem } = useContext(ItemsContext);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
