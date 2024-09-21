import ItemCondition from "./ItemCondition";

export default function ItemConditions() {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold my-1">Item Condition</h3>

      {["new", "sale", "Hot"].map((name, index) => (
        <ItemCondition key={index} id={index} name={name} />
      ))}
    </div>
  );
}
