import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export default function Blog() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return <div>This is blog</div>;
}
