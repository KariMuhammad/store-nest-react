import { Link } from "@mongez/react-router";
import { Separator } from "apps/front-office/design-system/components/ui/separator";
import { cartMenu } from "../constant/middleHeaderData";

const CartMenu = () => {
  const total = cartMenu.reduce(
    (sum, item) => sum + item.amount * item.price,
    0,
  );
  return (
    <div className="hidden group-hover:block absolute top-10 -left-[250px] w-[320px] bg-white z-10 rounded-lg p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <ul className="flex flex-col gap-y-4 mb-5">
        {cartMenu.map((item, index) => (
          <li key={index} className="flex justify-between items-start gap-x-3">
            <img src={item.img} alt="item image" className="w-20 h-20" />
            <div className="w-[180px]">
              <h3 className="text-xl font-bold text-main-500">{item.title}</h3>
              <p>
                {item.amount} x ${item.price}
              </p>
            </div>
            <span className="text-xl">
              <i className="bx bx-x"></i>
            </span>
          </li>
        ))}
      </ul>
      <Separator />
      <div className="mt-5 flex flex-col gap-y-3">
        <div className="flex justify-between items-center">
          <p>Total</p>
          <p className="text-main-500 text-xl font-bold">${total}</p>
        </div>
        <div className="flex justify-between items-center">
          <Link
            to="/cart"
            className="px-5 py-2.5 rounded-lg text-main-500 border border-main-500">
            View Cart
          </Link>
          <Link
            to="/checkout"
            className="px-5 py-2.5 rounded-lg text-white bg-main-500 ">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
