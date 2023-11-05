/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function FoodItem({ item }) {
  const { foodName, foodImage, foodCategory, price } = item;
  return (
    <div className="p-7 border-2 hover:bg-rose-100 rounded-xl cursor-pointer border-primary overflow-hidden">
      <div className="overflow-hidden">
        <img
          className="rounded-xl hover:rounded-xl hover:scale-105 w-full h-[30vh] transition-all duration-500 cursor-pointer object-cover"
          src={foodImage}
          alt=""
        />
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold">
          <span className="text-primary">Name:</span> {foodName}
        </h2>
        <div className="flex justify-between my-5">
          <p className="text-lg font-medium border-2 border-primary px-3 py-1 rounded-xl">
            <span className="text-primary">Category:</span> {foodCategory}
          </p>
          <p className="text-lg font-medium border-2 border-primary px-3 py-1 rounded-xl">
            <span className="text-primary ">Price:</span> {price}
          </p>
        </div>
        <button className="border rounded-xl px-3 py-3 w-full font-medium text-white bg-primary">
          Details
        </button>
      </div>
    </div>
  );
}