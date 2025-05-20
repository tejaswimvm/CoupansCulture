"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroFirst() {
  const settings = {  
    dots: false,
    infinite: true,
    speed: 3000,
    arrow:false,
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
    },
    {
      title: "💥 Buy 1 Get 1 Free!",
      description: "Stylish sunglasses to level up your summer look.",
      details: "UV Protection • Unisex • Multiple colors",
      logo: "https://i.pinimg.com/736x/bb/3b/65/bb3b652bd3fdb5957181aeaf2a60c529.jpg",
    },
    {
      title: "🎉 Clearance Sale",
      description: "Final stock on our bestselling smartwatches.",
      details: "Heart rate monitor • Sleep tracking • GPS",
      logo: "https://i.pinimg.com/736x/bb/3b/65/bb3b652bd3fdb5957181aeaf2a60c529.jpg",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="flex justify-center items-center py-10 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full h-auto md:h-[350px] max-w-5xl border border-gray-200 flex flex-col items-center">
            {/* Slide content */}
            <div className="flex flex-col md:flex-row gap-6 w-full ">
              {/* Left Section */}
              <div className="flex flex-col gap-4 w-full md:w-2/3">
                <div className="border border-black p-4 rounded-md text-center">
                  <h2 className="text-2xl font-bold">{slide.title}</h2>
                </div>
                <div className="border border-black p-4 rounded-md text-center">
                  <p className="text-lg text-gray-700">{slide.description}</p>
                </div>
                <div className="border border-black p-4 rounded-md text-center">
                  <p className="text-sm text-gray-600">{slide.details}</p>
                </div>
              </div>

              {/* Right Section */}
              <div className=" w-full md:w-1/3 border border-black rounded-md bg-gray-50 flex flex-col items-center justify-center gap-4 p-4">
                <img
                  src={slide.logo}
                  alt="Slide visual"
                  className="w-40 h-40 object-contain rounded-md shadow-md"
                />
                <div className="border border-black p-2 rounded-md text-center">
                  <p className="text-sm text-gray-600 font-semibold">{slide.title}</p>
                </div>
              </div>
            </div>

            {/* Button Centered Below */}
            <div className="mt-6">
              <button className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
