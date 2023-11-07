/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

export default function UpdateFood() {
  const food = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    quantity,
    count,
    price,
    userName,
    userEmail,
    origin,
    description,
  } = food;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const newFoodName = form.newFoodName.value;
    const newFoodImage = form.newFoodImage.value;
    const newFoodCategory = form.newFoodCategory.value;
    const newOrigin = form.newOrigin.value;
    const newQuantity = form.newQuantity.value;
    const newPrice = form.newPrice.value;
    const newDescription = form.newDescription.value;

    const updatedFood = {
      _id,
      newFoodName,
      newFoodImage,
      newFoodCategory,
      newQuantity,
      count,
      newPrice,
      userName,
      userEmail,
      newOrigin,
      newDescription,
    };

    console.log(updatedFood);

    fetch("http://localhost:5000/api/v1/updateFoodDetails", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Food details updated successfully");
          navigate("/myAddedFoods");
        }
      });
  };

  return (
    <div className="mt-10 mb-20">
      <h2 className="text-5xl font-semibold text-primary text-center mb-10">
        Update Food Details
      </h2>
      <div>
        <form
          onSubmit={handleSubmit}
          className="px-5 md:px-0 w-full md:w-3/4 lg:w-2/6 mx-auto"
        >
          <div className="flex flex-col">
            <span className="text-lg font-medium">Name</span>
            <input
              type="text"
              name="newFoodName"
              defaultValue={foodName}
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col my-5">
            <span className="text-lg font-medium">Food Image URL</span>
            <input
              type="url"
              name="newFoodImage"
              defaultValue={foodImage}
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Category</span>
            <input
              type="text"
              name="newFoodCategory"
              defaultValue={foodCategory}
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <span className="text-lg font-medium">Origin</span>
            <input
              type="text"
              name="newOrigin"
              defaultValue={origin}
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col my-5">
            <span className="text-lg font-medium">Quantity</span>
            <input
              type="number"
              name="newQuantity"
              defaultValue={quantity}
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Price</span>
            <input
              type="number"
              name="newPrice"
              defaultValue={price}
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col my-5">
            <span className="text-lg font-medium">Description</span>
            <textarea
              type="text"
              name="newDescription"
              defaultValue={description}
              className="px-4 py-3 h-[15rem] rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          {user?.email == userEmail ? (
            <button className="bg-primary mt-5 border-2 border-primary text-white w-full text-lg font-semibold py-3 rounded-xl">
              Update
            </button>
          ) : (
            <button
              disabled
              className="bg-primary mt-5 border-2 border-primary text-white w-full text-lg font-semibold py-3 rounded-xl"
            >
              You are not authorized
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
