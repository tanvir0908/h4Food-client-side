/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

export default function FoodDetails() {
  const foodDetails = useLoaderData();
  const {
    foodName,
    foodImage,
    foodCategory,
    quantity,
    price,
    userName,
    userEmail,
    origin,
    description,
  } = foodDetails;
  return (
    <div className="mx-32 mt-10 mb-20">
      <h2 className="text-5xl mb-16 text-center font-semibold text-primary">
        Food Details
      </h2>
      <div className="flex items-center gap-10">
        <div className="flex-1">
          <img className="rounded-xl ml-auto w-3/4" src={foodImage} alt="" />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-semibold">
            Name: <span className="text-primary">{foodName}</span>
          </h2>
          <p className="text-xl font-semibold">Category: {foodCategory}</p>
          <p className="text-xl font-semibold">Made By: {userName}</p>
          <p className="text-xl font-semibold">Origin: {origin}</p>
          <div className="w-3/4">
            <p className="text-xl font-semibold">Description:</p>
            <p className="text-lg font-medium text-gray-500">{description}</p>
          </div>
          <p className="text-xl font-semibold">
            Price: <span className="text-primary">{price}</span>
          </p>
          <button className="text-xl font-semibold px-5 py-3 rounded-xl bg-primary text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
