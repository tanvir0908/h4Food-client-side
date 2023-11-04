import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function Root() {
  return (
    <div className="font-primary">
      <Navbar />
      <Outlet />
    </div>
  );
}
