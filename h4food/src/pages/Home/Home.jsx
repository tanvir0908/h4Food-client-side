import Banner from "../../components/Banner/Banner";
import Newsletter from "../../components/Newsletter/Newsletter";
import TopSellingItems from "../../components/TopSellingItems/TopSellingItems";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopSellingItems />
      <Newsletter />
    </div>
  );
}
