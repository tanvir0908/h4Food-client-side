import toast from "react-hot-toast";

export default function Newsletter() {
  const handleNewsSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();
    toast.success("Subscribed successfully");
  };

  return (
    <div className="mx-5 lg:mx-32 my-20 bg-rose-200 rounded-xl">
      <div className="flex items-center justify-evenly">
        <div className="flex-1 space-y-3">
          <h2 className="text-4xl mb-5 font-semibold text-primary text-center">
            Subscribe to newsletter
          </h2>
          <p className="text-lg font-medium text-gray-600 text-center">
            and receive a variety of more than 1000 recipes!
          </p>
          <form className="text-center" onSubmit={handleNewsSubmit}>
            <input
              className="border-2 rounded-xl px-4 py-3 w-1/2 border-primary"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
            <br />
            <button className="mt-5 rounded-xl px-4 py-3 w-1/2 bg-primary text-white font-medium">
              I want more recipes!
            </button>
          </form>
        </div>
        <div className="flex-1">
          <img
            className="w-full rounded-r-xl"
            src="https://www.health.com/thmb/RsjkCzGplbA5m0kPaP-lsrDHaY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp9d23b1b3qgn300_Medium_4617105-01a90e562b5a469daf33b757e0c07083.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
