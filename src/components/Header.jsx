import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContextProvider";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const { items } = useContext(ItemsContext);
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
