/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

export default function FoodDetails() {
  const foodDetails = useLoaderData();
  const {
    _id,
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="mx-5 md:mx-32 mt-10 mb-20">
      <Helmet>
        <title>Food Details - h4Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h2 className="text-4xl md:text-5xl mb-16 text-center font-semibold text-primary">
        Food Details
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
        <div className="flex-1">
          <img
            className="rounded-xl mx-auto w-[35rem] lg:w-3/4 h-[25rem] md:h-[30rem] lg:h-[35rem] object-cover"
            src={foodImage}
            alt=""
          />
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
          <Link to={`/foodOrder/${_id}`}>
            <button className="text-xl mt-5 font-semibold px-5 py-3 rounded-xl bg-primary text-white">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
