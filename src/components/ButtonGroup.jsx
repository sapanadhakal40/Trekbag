import { useContext } from "react";
import Button from "./Button";
import { ItemsContext } from "../context/ItemsContextProvider";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useContext(ItemsContext);
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttontype="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttontype="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttontype="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttontype="secondary">
        Remove all items
      </Button>
    </section>
  );
}

//advanced way
// {
//   const secondaryButtons = [
//     {
//       text: "Mark all as complete",
//       onClick: handleMarkAllAsComplete,
//     },
//     {
//       text: "Mark all as incomplete",
//       onClick: handleMarkAllAsIncomplete,
//     },
//     {
//       text: "Reset to initial",
//       onClick: handleResetToInitial,
//     },
//     {
//       text: "Remove all items",
//       onClick: handleRemoveAllItems,
//     },
//   ];
//   return (
//     <section className="button-group">
//       {secondaryButtons.map((button) => (
//         <Button
//           key={button.text + button.onClick.toString()}
//           text={button.text}
//           onClick={button.onClick}
//           buttonType="secondary"
//         />
//       ))}
//     </section>
//   );
// }
