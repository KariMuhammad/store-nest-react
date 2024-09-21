import { cn } from "@utils";
import { Check } from "lucide-react";

type StyledCheckBoxProps = {
  checked: boolean;
};

const StyledCheckBox = ({ checked }: StyledCheckBoxProps) => {
  return (
    <div className="relative w-5 h-5 rounded-md border-2 overflow-hidden border-gray-200 mr-2">
      <div
        className={cn({
          "w-full h-full transition-opacity duration-300": true,
          "opacity-0": !checked,
          "opacity-100 bg-primary text-primary-foreground": checked,
        })}>
        <Check
          size={15}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default StyledCheckBox;
