"use client"
import { useEffect, useState } from "react";
import Modal from '../CouponModal/Modal'
import base_url from '../helper/baseurl'
import axios from "axios";
export default function Offers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState("");
   
  const [offers,setOffers] = useState([]);
  
  const fetchOffers = async () => {
    try {
      const response = await axios.get(base_url + `/api/coupon/getAllCoupon`);
      console.log("---data---",response.data)
      setOffers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(()=>{
   fetchOffers()
  },[])
 
  // const handleOpenModal = (offer) => {
  //   setSelectedOffer(offer);
  //   setIsModalOpen(true);

  //   window.open('/reedem', '_blank');
  // };


  const handleOpenModal = (offer) => {
  setSelectedOffer(offer);
  setIsModalOpen(true);

  // Copy the offer code to clipboard
  navigator.clipboard.writeText(offer.code)
    .then(() => {
      console.log("Code copied:", offer.code);
    })
    .catch((err) => {
      console.error("Failed to copy code:", err);
    });

   const test = {
      code:offer?.code,
      website:offer?.website
   }

  // Open the redeem page in a new tab

  // const encodedOffer = encodeURIComponent(JSON.stringify(offer));
  // window.open(`/reedem?data=${encodedOffer}`, '_blank');


  const encodedOffer = encodeURIComponent(btoa(JSON.stringify(test)));
  window.open(`/reedem?data=${encodedOffer}`, '_blank');
  // window.open('/reedem', '_blank');
};


  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOffer("");
  };

  return (
    <div className="py-12 bg-blue-100">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">🔥 Best Offers</h1>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {offers.slice(0,5).map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={offer.logo}
                alt={`Offer ${index + 1}`}
                className="w-32 h-16 object-contain mb-4"
              />
              <p className="text-gray-700 mb-6 text-[1.2rem] line-clamp-3">{offer.description}</p>
              <button
                onClick={() => handleOpenModal(offer)}
                className="cursor-pointer mt-auto px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                Get Coupon
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} offer={selectedOffer}  />
    </div>
  );
}
