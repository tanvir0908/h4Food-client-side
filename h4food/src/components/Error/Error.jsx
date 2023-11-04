import { Link } from "react-router-dom";
import error from "../../assets/not-found.png";

export default function Error() {
  return (
    <div className="w-full bg-rose-300 h-[100vh]">
      <div className="flex flex-col-reverse lg:flex-row text-center lg:text-left  lg:gap-10 justify-around items-center mx-[10%] pt-[10%] md:pt-0 lg:pt-[6%] ">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary">{`Oops! It seems you've taken a wrong turn`}</h1>
          <p className=" font-medium text-xl lg:text-2xl my-10 ">{`The page you're looking for might been misplaced, lost in cyberspace, or it simply doesn't exist.`}</p>
          <Link
            to={"/"}
            className="text-xl text-primary border-primary font-semibold border-2 px-5 py-3 rounded-xl "
          >
            Return Home
          </Link>
        </div>
        <div className="flex-1">
          <img
            className="w-full md:w-[90%] mx-auto lg:w-full"
            src={error}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
