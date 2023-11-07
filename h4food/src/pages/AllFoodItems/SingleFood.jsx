/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";

export default function SingleFood({ food }) {
  const { _id, foodName, foodImage, foodCategory, price, quantity } = food;

  return (
    <div className="p-5 md:p-7 border-2 flex flex-col md:flex-row w-full items-center gap-5 hover:bg-rose-100 hover:shadow-md rounded-xl cursor-pointer border-primary overflow-hidden">
      <div className="overflow-hidden">
        <img
          className="rounded-xl hover:rounded-xl hover:scale-105 md:w-[15rem] md:h-[15rem] transition-all duration-500 cursor-pointer object-cover"
          src={foodImage}
          alt=""
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold">
          <span className="text-primary">Name:</span> {foodName}
        </h2>
        <div className="flex flex-col lg:flex-row justify-between my-5">
          <p className="text-lg font-medium mb-3 lg:mb-0">
            <span className="text-primary">Category:</span> {foodCategory}
          </p>
          <p className="text-lg font-medium">
            <span className="text-primary ">Quantity:</span> {quantity}
          </p>
        </div>
        <p className="text-xl font-medium mb-5 rounded-xl">
          <span className="text-primary ">Price:</span> {price}
        </p>
        <Link to={`/foodDetails/${_id}`}>
          <button className="border rounded-xl px-3 py-3 w-full font-medium text-white bg-primary">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}
