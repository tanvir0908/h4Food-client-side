import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function MyAddedFood() {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [myAddedFoods, setMyAddedFoods] = useState([]);

  useState(() => {
    fetch(
      `https://b8a11-server-side-tanvir0908.vercel.app/api/v1/getFoodByEmail?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => setMyAddedFoods(data));
  }, []);

  return (
    <div className="mx-5 lg:mx-32 mt-10 mb-20">
      <Helmet>
        <title>{user?.displayName} Added - h4Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h2 className="text-4xl lg:text-5xl text-center font-semibold text-primary mb-10">
        My Added Food Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 lg:mx-32">
        {myAddedFoods.map((food) => (
          <div
            key={food._id}
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="p-5 md:p-7 border-2 flex flex-col lg:flex-row w-full items-center gap-5 hover:bg-rose-100 hover:shadow-md rounded-xl cursor-pointer border-primary overflow-hidden"
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
                <span className="text-primary">Category:</span>{" "}
                {food.foodCategory}
              </p>
              <p className="text-xl font-medium mb-5 rounded-xl">
                <span className="text-primary ">Price:</span> {food.price}
              </p>
              <Link to={`/updateFoodDetails/${food._id}`}>
                <button className="border mt-5 rounded-xl px-3 py-3 w-full font-medium text-white bg-primary">
                  Update
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {myAddedFoods.length == 0 ? (
        <div className="h-[40vh] flex justify-center items-center">
          {/* <h2 className="text-5xl text-center  text-primary font-semibold">
            Sorry no item available
          </h2> */}
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
