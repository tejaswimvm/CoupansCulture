export const Fashion = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      
      {/* Image Box */}
      <div className="w-full lg:w-90 h-40 rounded-lg shadow-md p-4 m-4 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Fashion" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Text Box */}
      <div className="w-full lg:w-128 h-40 rounded-lg shadow-md p-4 m-4 text-center bg-red-600 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-white mb-1">Fashion Coupons</h2>
        <p className="text-white text-sm lg:text-base">This is a simple box using Tailwind CSS.</p>
      </div>

      {/* Nav + Image Box */}
      <div className="w-full lg:w-[39rem] h-40 flex flex-col lg:flex-row items-center justify-evenly rounded-lg shadow-md p-4 m-4 bg-red-700">
        
        {/* Text Navigation */}
        <div className="flex gap-4 justify-center w-full lg:w-2/3 mb-2 lg:mb-0">
          <span className="font-bold text-white text-xl">All</span>
          <span className="font-bold text-white text-xl">Fashion</span>
          <span className="font-bold text-white text-xl">Fashion</span>
        </div>
        
        {/* Logo Image */}
        <div className="rounded-lg overflow-hidden w-full lg:w-auto flex justify-center">
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/20250107124119/nike-shoe-logo.webp"
            alt="Fashion 3"
            className="w-60 h-24 object-cover"
          />
        </div>

      </div>
    </div>
  );
};
