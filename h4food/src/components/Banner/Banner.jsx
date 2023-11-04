import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./Banner.css";
import banner from "../../assets/banner.jpg";

export default function Banner() {
  return (
    <Container>
      <div className="rounded-xl relative mb-10">
        <img
          className="h-[100vh] md:h-[80vh] w-full object-cover overflow-hidden rounded-xl"
          src={banner}
          alt=""
        />
        <div className="from-[#151515] overflow-hidden bg-gradient-to-r rounded-xl w-full h-full absolute top-0 right-0">
          <div className="px-10 md:px-20 lg:px-0 lg:pl-[10%] h-full pt-[30%] md:pt-[12.5%] md:w-3/4 lg:w-1/2 text-white">
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Embark on a Flavorful Journey with{" "}
              <span className="text-primary font-bold">h4Food</span>
            </h1>
            <p className="my-8 text-lg font-medium leading-8">
              Savor the culinary enchantment of h4Food, where every dish is a
              masterpiece of flavor, quality, and artistry, ensuring a truly
              unique and unforgettable dining experience.
            </p>
            <Link
              to={"/allFoodItems"}
              className="bg-primary px-8 py-3 text-white   xl:text-lg font-semibold rounded-xl border-white"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
