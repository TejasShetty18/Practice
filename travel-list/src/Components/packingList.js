import Items from "./list.js";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function Packing() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Items item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default Packing;
