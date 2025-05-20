"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSecond() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      title: "🔥 30% OFF!",
      description: "Get the best wireless headphones at unbeatable prices.",
      details: "Noise-cancelling • 20hr battery • Fast charge",
      logo: "https://i.pinimg.com/736x/bb/3b/65/bb3b652bd3fdb5957181aeaf2a60c529.jpg",
      banner: "https://m.media-amazon.com/images/I/61JvL+zkRDL._AC_UF350,350_QL80_.jpg",
    },
    {
      title: "💥 Buy 1 Get 1 Free!",
      description: "Stylish sunglasses to level up your summer look.",
      details: "UV Protection • Unisex • Multiple colors",
      logo: "https://i.pinimg.com/736x/bb/3b/65/bb3b652bd3fdb5957181aeaf2a60c529.jpg",
      banner: "https://m.media-amazon.com/images/I/61JvL+zkRDL._AC_UF350,350_QL80_.jpg",
    },
    {
      title: "🎉 Clearance Sale",
      description: "Final stock on our bestselling smartwatches.",
      details: "Heart rate monitor • Sleep tracking • GPS",
      logo: "https://i.pinimg.com/736x/bb/3b/65/bb3b652bd3fdb5957181aeaf2a60c529.jpg",
      banner: "https://m.media-amazon.com/images/I/61JvL+zkRDL._AC_UF350,350_QL80_.jpg",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="flex justify-center items-center py-10 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-5xl border border-gray-200 flex flex-col items-center">
            <div className="flex flex-row  gap-4 w-full h-auto md:h-[300px]   ">
              {/* Left Side: Banner image */}
              <div className="w-2/3 rounded-md overflow-hidden flex items-center justify-center ">
                <img
                  src={slide.banner}
                  alt="Banner"
                  className="object-contain w-full h-72"
                />
              </div>

              <div className="w-1/3 flex flex-col items-center justify-center gap-4">
                <img
                  src={slide.logo}
                  alt="Logo"
                  className="w-28 h-30 object-contain rounded-md shadow-md "
                />

                <div className=" p-2 px-4 rounded-md text-center bg-yellow-100">
                  <p className="text-xl font-semibold text-red-600">{slide.title}</p>
                </div>

                <button className="mt-2 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
