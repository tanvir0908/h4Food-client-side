import axios from "axios";
import { useEffect, useState } from "react";
import SingleFood from "./SingleFood";

export default function AllFoodItems() {
  const [allFoods, setAllFoods] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/api/v1/foodItems").then((res) =>
      setAllFoods(res.data)
    );
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-5xl font-semibold text-center text-primary my-10">All Food Items</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-60 gap-10">
        {allFoods.map((food) => (
          <SingleFood key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
}
