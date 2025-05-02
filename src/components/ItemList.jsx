export default function ItemList({ items, handleDeleteItem }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            key={item.name}
            item={item}
            handleDeleteItem={handleDeleteItem}
          />
        );
      })}
      {/* <Item item={item1} />
      <Item item={item2} />
      <Item item={item3} /> */}
    </ul>
  );
}
function Item({ item, handleDeleteItem }) {
  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
