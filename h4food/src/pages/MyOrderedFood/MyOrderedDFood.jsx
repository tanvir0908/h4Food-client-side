import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

export default function MyOrderedDFood() {
  const [orderedFoods, setOrderedFoods] = useState([]);
  //   const [remainingOrders, setRemainingOrders] = useState(orderedFoods);
  const { user } = useContext(AuthContext);
  useState(() => {
    fetch(`http://localhost:5000/api/v1/getOrdersByEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrderedFoods(data));
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/v1/deleteFood?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Order deleted successfully.");
          const remaining = orderedFoods.filter((food) => food._id !== id);
          setOrderedFoods(remaining);
        }
      });
  };

  return (
    <div className="mt-10 mb-20">
      <h2 className="text-4xl lg:text-5xl font-semibold text-primary text-center mb-10">
        My Ordered Foods
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10 mx-5 md:mx-32">
        {orderedFoods.map((food) => (
          <div
            key={food._id}
            className="p-5 lg:mx-32 md:p-7 border-2 flex flex-col lg:flex-row w-full items-center gap-5 hover:bg-rose-100 hover:shadow-md rounded-xl cursor-pointer border-primary overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                className="rounded-xl hover:rounded-xl hover:scale-105 w-[20rem] h-[15rem] transition-all duration-500 cursor-pointer object-cover"
                src={food.foodImage}
                alt=""
              />
            </div>
            <div className="flex-1 space-y-3">
              <h2 className="text-2xl font-semibold">
                <span className="text-primary">Name:</span> {food.foodName}
              </h2>
              <p className="text-lg font-medium mb-3 lg:mb-0">
                <span className="text-primary">Food Owner:</span>{" "}
                {food.foodOwner}
              </p>
              <p className="text-lg font-medium mb-3 lg:mb-0">
                <span className="text-primary">Date:</span> {food.orderDate}
              </p>
              <p className="text-xl font-medium mb-5 rounded-xl">
                <span className="text-primary ">Price:</span> {food.price}
              </p>
              <button
                onClick={() => handleDelete(food._id)}
                className="border mt-5 rounded-xl px-3 py-3 w-full font-medium text-white bg-primary"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {orderedFoods.length == 0 ? (
        <div className="h-[40vh] flex justify-center items-center">
          {/* <h2 className="text-5xl text-center  text-primary font-semibold">
            Sorry no item available
          </h2> */}
          <span className="loading loading-spinner loading-lg text-primary"></span>
          ;
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
