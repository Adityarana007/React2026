export default function Item({ item, onCrossClick, onToggleClick }) {
  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={onToggleClick} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={onCrossClick}>❌</button>
    </li>
  );
}