import { StarFilledIcon } from "@radix-ui/react-icons";
import { StarIcon } from "lucide-react";

type Props = {
  ratings: number;
};

const Stars = ({ ratings }: Props) => {
  return (
    <div className="flex items-center">
      {new Array(5)
        .fill(<StarIcon size={15} className="text-[#AEAEAE]" />)
        .map((item, idx) => (
          <span key={idx} className="inline-block">
            {idx < Math.round(ratings) ? (
              <StarFilledIcon className="text-[#FDC040]" />
            ) : (
              item
            )}
          </span>
        ))}
    </div>
  );
};

export default Stars;
