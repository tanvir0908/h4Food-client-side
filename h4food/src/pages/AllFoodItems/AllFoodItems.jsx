import axios from "axios";
import { useEffect, useState } from "react";
import SingleFood from "./SingleFood";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function AllFoodItems() {
  const [allFoods, setAllFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [currentPage]);

  const { count } = useLoaderData();
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/pageItems?page=${currentPage}`)
      .then((res) => setFilteredFoods(res.data));
  }, [currentPage]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/foodItems").then((res) => {
      setAllFoods(res.data);
    });
  }, []);

  const handleClear = () => {
    setSearchText("");
    if (currentPage == 0) {
      setCurrentPage(1);
    } else {
      setCurrentPage(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    const filter = allFoods.filter((food) => {
      return food.foodName == search;
      // return food.foodName.indexOf(search) != -1;
    });
    setFilteredFoods(filter);
  };

  return (
    <div className="mb-20">
      <Helmet>
        <title>All Food Items - h4Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-primary my-10">
        All Food Items
      </h2>
      <div className="mb-10 text-center">
        <form
          onSubmit={handleSubmit}
          className="mx-auto text-center flex flex-row items-center justify-center "
        >
          <input
            onChange={(e) => setSearchText(e.target.value)}
            required
            type="text"
            name="search"
            value={searchText}
            className="border outline-none rounded-l-lg w-1/2 lg:w-1/4 bg-rose-100 px-5 py-3"
          />
          <button className="bg-primary px-5 py-[0.7rem] rounded-r-lg text-xl font-medium text-white">
            Search
          </button>
        </form>
        <button
          onClick={handleClear}
          className="border-2 border-primary px-10 mt-5 py-[0.7rem] rounded-lg text-lf font-medium "
        >
          Clear Search
        </button>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 md:mx-10 lg:mx-60 gap-10">
          {filteredFoods.map((food) => (
            <SingleFood key={food._id} food={food} />
          ))}
        </div>
        <div>
          {filteredFoods.length != 0 ? (
            <div className="text-center mt-10">
              {currentPage != 0 ? (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="bg-primary mx-1 w-[5rem] h-[3rem] rounded-xl font-medium text-white"
                >
                  Prev
                </button>
              ) : (
                ""
              )}
              {pages.map((page) => (
                <button
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page
                      ? "bg-white border-2 border-primary mx-1 w-[5rem] h-[3rem] rounded-xl font-medium text-primary"
                      : "bg-primary mx-1 w-[5rem] h-[3rem] rounded-xl font-medium text-white"
                  }
                  key={page}
                >
                  {page + 1}
                </button>
              ))}
              {currentPage != numberOfPages - 1 ? (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="bg-primary mx-1 w-[5rem] h-[3rem] rounded-xl font-medium text-white"
                >
                  Next
                </button>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {filteredFoods.length == 0 ? (
        <div className="h-[40vh] flex justify-center items-center">
          {/* <h2 className="text-5xl text-center  text-primary font-semibold">
            Sorry no item available
          </h2> */}
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
