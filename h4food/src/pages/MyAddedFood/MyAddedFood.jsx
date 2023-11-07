import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export default function MyAddedFood() {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [myAddedFoods, setMyAddedFoods] = useState([]);

  useState(() => {
    fetch(`http://localhost:5000/api/v1/getFoodByEmail?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyAddedFoods(data));
  }, []);

  return (
    <div>
      <h2 className="text-5xl">My Added Food Items{myAddedFoods.length}</h2>
    </div>
  );
}
