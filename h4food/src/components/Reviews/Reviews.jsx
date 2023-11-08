import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css";

export default function Partners() {
  const reviews = [
    {
      id: 1,
      name: "Tanvir Hasan",
      image:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1699432733~exp=1699433333~hmac=21c468a383663ecb8fa41aa1197d4d0b921652f3a1fecba615ad78d80b76fb9a",
      review:
        "h4food is a gastronomic wonderland. Exceptional flavors and impeccable service. It's a dining destination that leaves a lasting impression.",
    },
    {
      id: 2,
      name: "Emon Hasan",
      review: `h4food dazzles with an eclectic menu. Exceptional service, a cozy ambiance, and diverse culinary delights make every visit memorable.`,
      image:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=826&t=st=1699434830~exp=1699435430~hmac=027447578de0f6362632b256e5db63b1de96d1e57399bb69b8fd560fd618e23b",
    },
    {
      id: 3,
      name: "Robin Hasan",
      review: `h4food is a gastronomic wonderland. Exceptional flavors and impeccable service. It's a dining destination that leaves a lasting impression.`,
      image:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?w=826&t=st=1699434892~exp=1699435492~hmac=03ca5e8a21c92f9afd9b799faceba6c60091e57ea63a4dabd18ce0a401ff3272",
    },
    {
      id: 4,
      name: "Tahsan Khan",
      review: `h4food dazzles with an eclectic menu. Exceptional service, a cozy ambiance, and diverse culinary delights make every visit memorable.`,
      image:
        "https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436199.jpg?w=826&t=st=1699434904~exp=1699435504~hmac=85e57bd7f75b8a4860cc9e1ad48d1b8e727ff9447bf1c829c4030c7fdf152e81",
    },
    {
      id: 5,
      name: "Mymul Khan",
      review: `h4food is a gastronomic wonderland. Exceptional flavors and impeccable service. It's a dining destination that leaves a lasting impression.`,
      image:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671134.jpg?w=826&t=st=1699435020~exp=1699435620~hmac=58039b1a8431fcb802bcf4593a482e0a3552f5f99d86e2c026924f67815539f1",
    },
    {
      id: 6,
      name: "Salman Khan",
      review: `h4food dazzles with an eclectic menu. Exceptional service, a cozy ambiance, and diverse culinary delights make every visit memorable.`,
      image:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671165.jpg?w=826&t=st=1699435067~exp=1699435667~hmac=776b4a5095d39dd6d8ebffbff91404e2678d6cd836c47a21b3c3ad05d8f77383",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-3/4 mt-10 mb-20 mx-auto">
      <h2 className="text-4xl lg:text-5xl font-semibold text-primary text-center mb-10">Users Reviews</h2>
      <div className="">
        <Slider {...settings}>
          {reviews.map((partner) => (
            <div
              key={partner.id}
              className="bg-white cursor-pointer hover:bg-rose-200 transition duration-1000 rounded-xl"
            >
              <div className="rounded-t-xl h-56 bg-rose-200 flex justify-center items-center">
                <img
                  src={partner.image}
                  className="h-44 w-44 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex h-[14rem] flex-col rounded-b-xl border-red-200 border-2  justify-center items-center gap-5 p-4">
                <h2 className="text-2xl font-semibold text-primary">
                  {partner.name}
                </h2>
                <p className="font-lg text-gray-500 font-medium">
                  {partner.review}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
