import { capitalize } from "@mongez/reinforcements";
import { useState } from "react";
import StyledCheckBox from "./StyledCheckBox";

type ColorOptionProps = {
  id: number;
  name: string;
};

const ColorOption = ({ id, name }: ColorOptionProps) => {
  const [check, setCheck] = useState(false);

  return (
    <div className="flex gap-2 justify-start my-1">
      <input
        id={`color-options-${id}`}
        className="hidden"
        type="checkbox"
        name="color"
        value={name}
      />
      <label
        className="flex items-center text-md text-gray-700 cursor-pointer"
        htmlFor={`color-options-${id}`}
        onClick={() => setCheck(prev => !prev)}>
        <StyledCheckBox checked={check} />
        {capitalize(name)} (34)
      </label>
    </div>
  );
};

export default ColorOption;
