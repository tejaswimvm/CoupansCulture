import { Fashion } from "./Fashion";
import { OfferSection } from "./OfferSection";
import { Offers } from "./Offers";
import { OffersSecond } from "./OffersSecond";

export default function FashionCoupon() {
  return (
    <div className="bg-black ">
      <Fashion />
      <div className="flex flex-col lg:flex-row lg:ml-4 items-center lg:items-start gap-6">
        <OfferSection />
        <Offers /> 
        <OffersSecond />
      </div>
    </div>
  );
}
