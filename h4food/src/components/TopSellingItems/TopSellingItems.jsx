import axios from "axios";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

export default function TopSellingItems() {
  const [topSellingFood, setTopSellingFood] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/topSelling")
      .then((res) => setTopSellingFood(res.data));
  }, []);

  return (
    <Container>
      <div className="my-28">
        <h2 className="text-4xl lg:text-5xl font-semibold text-primary text-center my-10">
          Our Most Popular Food Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-32">
          {topSellingFood.map((item) => (
            <FoodItem key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to={"/allFoodItems"}>
            <button className="px-5 py-3 bg-primary font-semibold text-white text-xl rounded-xl">
              See all Items
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
