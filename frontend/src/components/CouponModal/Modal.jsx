import Link from "next/link";

export default function Modal({ isOpen, onClose, offer }) {
    if (!isOpen) return null;
    
    const {title , website , code , description , logo} = offer
  
    return (
      <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 px-4">
        <div className="bg-white rounded-2xl p-6 w-[90%] md:w-[70%] lg:w-[50%] relative shadow-2xl">
          <button
            className="absolute cursor-pointer top-2 right-2 text-gray-600 hover:text-black text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
  
          <h2 className="text-2xl font-bold mb-4 text-center">
            {title}
          </h2>
          <hr className="bg-gray-700 mb-2" />
          <p className="text-center text-xl">Copy Code And Choose At Checkout</p>
  
          <div className="flex justify-center items-center mt-2 gap-2">
            <div className="border-2 border-[#0d65a0] bg-[#DCEEFF] rounded-b-md">
              <h4 className="text-2xl text-[#0d65a0] px-4 py-1">{code}</h4>
            </div>
            <p
              onClick={() => navigator.clipboard.writeText("CG23R13")}
              className="bg-[#0d65a0] text-white p-2 rounded-md cursor-pointer hover:bg-[#09578b] transition"
            >
              Copy code
            </p>
          </div>
  
          <div className="mt-4 text-center">
           <Link href={website}> <button className="px-6 py-2 bg-red-600 text-white rounded-xl cursor-pointer hover:bg-red-700 transition">
              Visit Store
            </button></Link>
          </div>
  
          <div className="bg-[rgb(236 240 241 / .5)]-100 flex flex-col md:flex-row justify-center items-center mt-4 gap-4 py-4 px-2 max-w-full rounded-md">
            <img
              src={logo}
              alt="Offer Brand"
              className="object-cover h-32 w-32 md:h-48 md:w-48 shadow-2xl rounded-md"
            />
            <p className="px-4 text-justify">
            {description}            </p>
          </div>
        </div>
      </div>
    );
  }
  