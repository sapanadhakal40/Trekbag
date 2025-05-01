export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.name} item={item} />;
      })}
      {/* <Item item={item1} />
      <Item item={item2} />
      <Item item={item3} /> */}
    </ul>
  );
}
function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}
