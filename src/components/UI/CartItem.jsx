import deleteSvg from "../../Assets/svg/deleteSVG.svg";
export default function CartItem({ image, title, quantity, price, onIncrease, onDecrease, onDelete }) {
  return (
    <li className="flex flex-col md:flex-row justify-around border-b ">
      <div className="flex justify-between  space-x-6 items-center">
        <img src={image} alt={title} className="w-28 h-24 md:h-40 md:w-44 " /> <span className="md:text-lg">{title} </span>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex items-center">
          <div className="w-[150px] h-[52px] border border-gray-300 rounded-lg flex justify-around items-center">
            <button onClick={onDecrease} className="inline-block px-4 py-2 cursor-pointer font-medium">
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button onClick={onIncrease} className="inline-block px-4 py-2 cursor-pointer font-medium">
              +
            </button>
          </div>
          <p className="text-xl font-medium ">{quantity * price} €</p>
        </div>
        <button onClick={onDelete} className="inline-block justify-center">
          <img src={deleteSvg} alt="delete" />
        </button>
      </div>
    </li>
  );
}
