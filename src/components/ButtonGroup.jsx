import Button from "./Button";

export default function ButtonGroup({ handleRemoveAllItems }) {
  return (
    <section className="button-group">
      <Button buttontype="secondary">Mark all as complete</Button>
      <Button buttontype="secondary">Mark all as incomplete</Button>
      <Button buttontype="secondary">Reset to initial</Button>
      <Button onClick={handleRemoveAllItems} buttontype="secondary">
        Remove all items
      </Button>
    </section>
  );
}
