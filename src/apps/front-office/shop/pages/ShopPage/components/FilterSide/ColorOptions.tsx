import ColorOption from "./ColorOption";

const ColorOptions = () => {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold my-1">Color</h3>

      {["red", "green", "blue"].map((name, index) => (
        <ColorOption key={index} id={index} name={name} />
      ))}
    </div>
  );
};

export default ColorOptions;
