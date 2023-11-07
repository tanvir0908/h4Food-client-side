import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

export default function FoodOrdering() {
  const food = useLoaderData();
  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    price,
    quantity,
    count,
    userName,
    userEmail,
    origin,
  } = food;
  const [order, setOrder] = useState(1);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    // const foodName = form.foodName.value;
    // const price = form.price.value;
    const orderQuantity = form.orderQuantity.value;
    const orderUserName = form.orderUserName.value;
    const orderUserEmail = form.orderUserEmail.value;
    const orderDate = form.date.value;
    const foodOwner = userName;

    const newOrder = {
      foodName,
      foodImage,
      foodCategory,
      price,
      origin,
      foodOwner,
      orderQuantity,
      orderUserName,
      orderUserEmail,
      orderDate,
    };
    const toastLoading = toast.loading("Ordering food...");

    fetch("http://localhost:5000/api/v1/orderFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // success message
          toast.success("Food ordered successfully", { id: toastLoading });

          //   reduce quantity and increase count
          const countData = {
            _id,
            quantity,
            count,
            orderQuantity,
          };

          fetch("http://localhost:5000/api/v1/reduceFoodsCount", {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(countData),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));

          navigate("/allFoodItems");
        } else {
          toast.error("Food order failed", { id: toastLoading });
        }
      });
  };

  return (
    <div className="pb-20 pt-5">
      <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center my-10">
        Food Ordering Page
      </h2>
      <div>
        <form
          onSubmit={handleSubmit}
          className="px-5 md:px-0 w-full md:w-3/4 lg:w-2/6 mx-auto"
        >
          <div className="flex flex-col">
            <span className="text-lg font-medium">Food Name</span>
            <input
              disabled
              type="text"
              name="foodName"
              defaultValue={foodName}
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col my-5">
            <span className="text-lg font-medium">Price</span>
            <input
              disabled
              type="number"
              name="price"
              defaultValue={price}
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Order Quantity</span>
            <input
              onChange={(e) => {
                setOrder(e.target.value);
              }}
              min={1}
              type="number"
              name="orderQuantity"
              defaultValue={1}
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col my-5">
            <span className="text-lg font-medium">Buyer Name</span>
            <input
              disabled
              type="text"
              name="orderUserName"
              value={user?.displayName}
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Buyer Email</span>
            <input
              disabled
              type="email"
              name="orderUserEmail"
              value={user?.email}
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col my-5">
            <span className="text-lg font-medium">Buying Date</span>
            <input
              type="date"
              name="date"
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          {quantity == 0 ||
          Number(order) > Number(quantity) ||
          user?.email == userEmail ? (
            <button
              disabled
              className="bg-primary mt-5 border-2 border-primary text-white w-full text-lg font-semibold py-3 rounded-xl"
            >
              Item is not available for purchase
            </button>
          ) : (
            <button className="bg-primary mt-5 border-2 border-primary text-white w-full text-lg font-semibold py-3 rounded-xl">
              Confirm Purchase
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
