import { capitalize } from "@mongez/reinforcements";
import { useState } from "react";
import StyledCheckBox from "./StyledCheckBox";

type ItemConditionProps = {
  id: number;
  name: string;
};

const ItemCondition = ({ id, name }: ItemConditionProps) => {
  const [check, setCheck] = useState(false);

  return (
    <div className="flex gap-2 justify-start my-1">
      <input
        id={`item-condition-${id}`}
        className="hidden"
        type="checkbox"
        name="color"
        value={name}
      />
      <label
        className="flex items-center text-md text-gray-700 cursor-pointer"
        htmlFor={`item-condition-${id}`}
        onClick={() => setCheck(prev => !prev)}>
        <StyledCheckBox checked={check} />
        {capitalize(name)} (34)
      </label>
    </div>
  );
};

export default ItemCondition;
