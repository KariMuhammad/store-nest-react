// Import the correct types

type CategoryItemProps = {
  img: string;
  name: string;
};

export default function CategoryItem({ img, name }: CategoryItemProps) {
  return (
    <li className="flex items-center border border-solid border-[#F2F3F4] rounded mb-3 px-[18px] py-2 justify-between  text-mainColor leading-8 cursor-pointer hover:text-primary hover:border-light hover:shadow-md transition-all delay-200">
      <div className="flex items-center p-0  text-mainColor hover:text-primary text-sm min-w-[30px] mr-3 gap-4">
        <img src={img} alt={name} className="w-[30px] h-[30px]" />
        <span className="text-sm font-medium">{name}</span>
      </div>
      <div></div>
      <span className="w-[24px] h-[24px] rounded-2xl bg-[#BCE3C9] text-[13px] text-mainColor flex items-center justify-center">
        20
      </span>
    </li>
  );
}
