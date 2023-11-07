import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function FoodOrdering() {
  const food = useLoaderData();
  const { foodName, price, quantity, userName, userEmail } = food;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div>
      <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center my-10">
        Food Ordering Page {foodName}
      </h2>
    </div>
  );
}
