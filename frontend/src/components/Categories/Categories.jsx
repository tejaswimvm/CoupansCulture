"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {
  const categories = [
    { item: "Mobile" },
    { item: "Beauty" },
    { item: "Apparel" },
    { item: "Health" },
    { item: "Banking" },
    { item: "Travel" },
    { item: "Food" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="py-8 mx-auto max -w-full">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">😀 Top Categories</h2>
      <div className="w-full mx-auto overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-r from-amber-300 to-indigo-700 p-8">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="-3">
              <div className="bg-white text-center text-lg font-semibold py-6 px-4 rounded-xl shadow-md">
                {category.item}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );                                              
}
