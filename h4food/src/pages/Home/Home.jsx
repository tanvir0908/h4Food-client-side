import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Newsletter from "../../components/Newsletter/Newsletter";
import Reviews from "../../components/Reviews/Reviews";
import TopSellingItems from "../../components/TopSellingItems/TopSellingItems";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home - h4Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner />
      <TopSellingItems />
      <Newsletter />
      <Reviews />
    </div>
  );
}
