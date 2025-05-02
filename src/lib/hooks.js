import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContextProvider";

export function useItemsContext() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      "useItemContext must be used within a ItemsContextProvider"
    );
  }
  return context;
}
