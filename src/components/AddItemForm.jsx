import Button from "./Button";
import { useState } from "react";

export default function AddItemForm() {
  const [itemText, setItemText] = useState("");
  return (
    <form onSubmit={() => {}}>
      <h2>Add an item</h2>
      <input
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button>Add Item</Button>
    </form>
  );
}
