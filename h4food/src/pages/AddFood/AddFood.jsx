import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function AddFood() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const foodName = form.newFoodName.value;
    const foodImage = form.newFoodImage.value;
    const foodCategory = form.newFoodCategory.value;
    const quantity = Number(form.newQuantity.value);
    const count = 0;
    const price = Number(form.newPrice.value);
    const userName = user?.displayName;
    const userEmail = user?.email;
    const origin = form.newOrigin.value;
    const description = form.newDescription.value;

    const updatedFood = {
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
    };

    console.log(updatedFood);

    fetch("https://b8a11-server-side-tanvir0908.vercel.app/api/v1/addFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("New food added successfully");
          navigate("/myAddedFoods");
        }
      });
  };

  return (
    <div className="mx-5 lg:mx-32 mt-10 mb-20">
      <Helmet>
        <title>Add New Food - h4Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h2 className="text-4xl lg:text-5xl mb-10 text-center font-semibold text-primary mb-10text-5xl">
        Add New Food
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
              placeholder="Enter food name"
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col my-5">
            <span className="text-lg font-medium">Food Image URL</span>
            <input
              type="url"
              name="newFoodImage"
              placeholder="Enter food URL"
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Category</span>
            <input
              type="text"
              name="newFoodCategory"
              placeholder="Enter food category"
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <span className="text-lg font-medium">Origin</span>
            <input
              type="text"
              name="newOrigin"
              placeholder="Enter food origin"
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col my-5">
            <span className="text-lg font-medium">Quantity</span>
            <input
              type="number"
              name="newQuantity"
              placeholder="Enter food quantity"
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Price</span>
            <input
              type="number"
              name="newPrice"
              placeholder="Enter food Price"
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col my-5">
            <span className="text-lg font-medium">Description</span>
            <textarea
              type="text"
              name="newDescription"
              placeholder="Enter description"
              className="px-4 py-3 h-[15rem] rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <button className="bg-primary mt-5 border-2 border-primary text-white w-full text-lg font-semibold py-3 rounded-xl">
            Create new food
          </button>
        </form>
      </div>
    </div>
  );
}
