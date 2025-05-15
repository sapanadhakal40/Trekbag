import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

// eslint-disable-next-line react-refresh/only-export-components
export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("items")) || initialItems;
    } catch {
      return initialItems;
    }
  });

  const handleAddItem = (newItemText) => {
    const newItem = {
      // id: 4,
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  useEffect(() => {
    try {
      localStorage.setItem("items", JSON.stringify(items));
    } catch {
      return items;
    }
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
