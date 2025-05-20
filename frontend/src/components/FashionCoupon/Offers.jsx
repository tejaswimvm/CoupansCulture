export const Offers = () => {
  const offers = [1, 2, 3]; // loop for brevity
  return (
    <div className="flex flex-col">
      {offers.map((_, idx) => (
        <div key={idx} className="w-full lg:w-[53rem] h-40 bg-red-200 rounded-lg shadow-md p-4 m-4 flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full h-full">

            {/* Text Offers */}
            <div className="grid grid-rows-3 gap-2 text-center text-2xl">
              <div className="bg-emerald-600 rounded">Offer</div>
              <div className="bg-emerald-600 rounded">Offer</div>
              <div className="bg-emerald-600 rounded">Offer</div>
            </div>

            {/* Image */}
            <div className="bg-amber-900 rounded-lg overflow-hidden">
              <img
                src="https://fabrikbrands.com/wp-content/uploads/Software-Company-Logos-3-1200x750.png"
                alt="Offer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center items-center">
              <button className="text-white text-xl sm:text-2xl bg-black px-4 py-2 rounded hover:bg-gray-800 transition">
                Get Offer
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};
