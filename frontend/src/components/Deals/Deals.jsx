"use client"

import { useState , useEffect } from "react";
import axios from "axios";
import base_url from '../helper/baseurl'
import Modal from '../CouponModal/Modal'

export default function Deals() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState("");
   
   const [deals , setDeals] = useState([]);

   const fetchDeals = async () => {
       try {
         const response = await axios.get(base_url + `/api/coupon/getAllCoupon`);
         setDeals(response.data.data);
       } catch (error) {
         console.log(error);
       }
     };
     
     useEffect(()=>{
      fetchDeals()
     },[])
    
     const handleOpenModal = (offer) => {
       setSelectedOffer(offer);
       setIsModalOpen(true);
     };
   
     const handleCloseModal = () => {
       setIsModalOpen(false);
       setSelectedOffer("");
     };
   

    return (
      <div className="py-12 ">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">🎉 Deals on Fire</h1>
  
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {deals.slice(4).map((deal, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={deal.logo}
                  alt={`Offer ${index + 1}`}
                  className="w-32 h-16 object-contain mb-4"
                />
                <p className="text-gray-700 mb-6 text-[1.2rem]">{deal.description}</p>
                <button className="mt-auto px-5 py-2 bg-black cursor-pointer text-white rounded-xl hover:bg-gray-800 transition"
                 onClick={() => handleOpenModal(deal)}>
                  Get Coupon
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className=" py-5">
            <img src='/images/banner.jpg' alt="" className="w-screen object-cover" />
        </div>
              <Modal isOpen={isModalOpen} onClose={handleCloseModal} offer={selectedOffer}  />
      </div>
    );
  }
  