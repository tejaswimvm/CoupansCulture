import React from 'react';

export const OffersSecond = () => {
  return (
    <div className="grid grid-rows-3 w-full sm:w-48 gap-4 py-4 mx-auto sm:ml-12">
    {/* Card 1 */}
    <div className="bg-amber-700 text-center shadow-lg border border-b-cyan-950 rounded-md p-2 flex flex-col justify-between">
      <img 
        src="https://cdn.logojoy.com/wp-content/uploads/20250107124119/nike-shoe-logo.webp" 
        alt="Fashion" 
        className="w-full h-24 object-cover rounded"
      />
      <h1 className="text-white font-semibold text-base mt-2">Offer</h1>
      <button className="text-white text-sm bg-black px-2 py-1 rounded hover:bg-gray-800 transition">
        Buy now
      </button>
    </div>

    {/* Card 2 */}
    <div className="bg-amber-700 text-center shadow-lg border border-b-cyan-950 rounded-md p-2 flex flex-col justify-between">
      <img 
        src="https://cdn.logojoy.com/wp-content/uploads/20250107124119/nike-shoe-logo.webp" 
        alt="Fashion" 
        className="w-full h-24 object-cover rounded"
      />
      <h1 className="text-white font-semibold text-base mt-2">Offer</h1>
      <button className="text-white text-sm bg-black px-2 py-1 rounded hover:bg-gray-800 transition">
        Buy now
      </button>
    </div>

    {/* Card 3 */}
    <div className="bg-amber-700 text-center shadow-lg border border-b-cyan-950 rounded-md p-2 flex flex-col justify-between">
      <img 
        src="https://cdn.logojoy.com/wp-content/uploads/20250107124119/nike-shoe-logo.webp" 
        alt="Fashion" 
        className="w-full h-24 object-cover rounded"
      />
      <h1 className="text-white font-semibold text-base mt-2">Offer</h1>
      <button className="text-white text-sm bg-black px-2 py-1 rounded hover:bg-gray-800 transition">
        Buy now
      </button>
    </div>
  </div>
  );
};
