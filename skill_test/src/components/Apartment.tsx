import { Baby, BedDouble, CarTaxiFront, MoonStar, PawPrint, User } from "lucide-react";
import Image from "../assets/image.png";
import { useState } from "react";
import ConfirmationModal from "./Modal";

const Apartment = (props: any) => {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal((prevState) => !prevState);
  }

  function handleImageClick() {
    window.open('https://www.imah.com', '_blank');
  }

  console.log(props.info);

  return (
    <div className="bg-white rounded-lg flex flex-col md:flex-row md:h-[169px] overflow-hidden">
      {showModal && (
        <ConfirmationModal isOpen={true} onClose={handleClick} onConfirm={handleClick} />
      )}
      {/* Image Section with Overlay Button */}
      <div className="relative w-full md:w-[184px] h-[200px] md:h-full flex-shrink-0">
        <img
          src={Image}
          className="w-full h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg object-center"
          alt="Apartment"
        />
        <div className="absolute inset-x-0 bottom-0 p-2">
          <button 
            onClick={handleImageClick}
            className="w-full bg-white bg-opacity-80 py-1 rounded-full text-blue-600 text-sm font-bold hover:bg-opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            www.imah.com
          </button>
        </div>
      </div>
      
      {/* Information Section */}
      <div className="flex flex-col w-full h-full">
        {/* Property Information */}
        <div className="h-auto md:h-[70%] mx-2 border-b-2 border-gray-300">
          <div className="flex px-4 pt-4 justify-between">
            <h3 className="text-lg space-x-2">{props.info.property_name}</h3>
            <p className="text-purple-600 text-lg">{props.info.price}</p>
          </div>
          <p className="px-4">Property code: {props.info.property_code}</p>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="px-4 py-2">Check In: {props.info.check_in}</p>
            <p className="px-4 py-2">Check Out: {props.info.check_out}</p>
            <button
              className="bg-orange-500 text-white px-4 mr-3 py-2 mb-4 rounded self-center hover:bg-orange-600 transition-colors"
              onClick={handleClick}
            >
              Select
            </button>
          </div>
        </div>
        {/* Amenities Section */}
        <div className="flex flex-wrap justify-between w-full md:w-[85%] h-auto md:h-[40%] rounded-md px-2 gap-2 py-1">
          <div className="flex items-center">
            <BedDouble size={25} className="mr-2" />
            <div className="flex flex-col">
              <p>BedRooms</p>
              <p>{props.info.bedrooms}</p>
            </div>
          </div>
          <div className="flex items-center">
            <MoonStar size={25} className="mr-2" />
            <div className="flex flex-col">
              <p>Nights</p>
              <p>12</p>
            </div>
          </div>
          <div className="flex items-center">
            <User size={25} className="mr-2" />
            <div className="flex flex-col">
              <p>Adults</p>
              <p>{props.info.adults}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Baby size={25} className="mr-2" />
            <div className="flex flex-col">
              <p>Children</p>
              <p>{props.info.children}</p>
            </div>
          </div>
          <div className="flex items-center">
            <CarTaxiFront size={25} className="mr-2" />
            <div className="flex flex-col">
              <p>Parking</p>
              <p>{props.info.parking}</p>
            </div>
          </div>
          <div className="flex items-center">
            <PawPrint size={25} className="mr-2" />
            <div className="flex flex-col">
              <p>Pets</p>
              <p>{props.info.pets}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
