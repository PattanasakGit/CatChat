'use client'
import React, { useRef, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import catData from "../../../public/catData.json";
import { ICat } from '../../models/ICat';
import { useCatStore } from '../../store/CatStore';
import { useClearData } from '../../store/ClearDataState';

const CustomNavbar: React.FC = () => {
  const [showCatDropdown, setShowCatDropdown] = useState<boolean>(false);
  const { selectedCat, setSelectedCat } = useCatStore();
  const catDropdownRef = useRef<HTMLDivElement>(null);
  const { isClearData,setIsClearData } = useClearData();

  const toggleCatDropdown = () => setShowCatDropdown(prevState => !prevState);

  const handleCatSelect = (cat: ICat) => {
    setSelectedCat(cat);
    setIsClearData(!isClearData);
    setShowCatDropdown(false);
  };

  const CatDetails: React.FC<{ cat: ICat }> = ({ cat }) => (
    <div className="flex flex-col items-center transform hover:scale-[1.1] transition-transform duration-300 hover:bg-orange-100 rounded-md ">
      <img src={cat.image} alt={cat.name} className="py-2 w-[90px] md:w-[110px] lg:w-[125px] xl:w-[150px] rounded-full mb-2" />
      <div className="text-center">
        <h3 className="text-lg sm:text-xl md:text-xl lg:text-[15px] font-bold">{cat.name}</h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-[15px]">{cat.summary}</p>
      </div>
    </div>
  );
  
  return (
    // <div className="backdrop-blur-[800px] bg-black bg-opacity-50 text-white py-4 pl-[10vw] pr-2 z-[955]">
    <div className="bg-black bg-opacity-40 text-white py-4 pl-[10vw] pr-2 z-[955]">
      <div className="container mx-auto flex justify-between items-center h-6">
        <div className="text-xl font-bold">CATchat</div>
        <div className="flex">
          <div className="relative inline-block" ref={catDropdownRef}>
            <button
              className="flex items-center min-w-32 px-4 py-2 rounded-md bg-white bg-opacity-10 hover:bg-orange-500"
              onClick={toggleCatDropdown}
            >
              {selectedCat && (
                <>
                  <div className="flex items-center">
                    <img
                      src={selectedCat.image}
                      alt={selectedCat.name}
                      className="w-6 rounded-full m-0 mr-2"
                    />
                    <span>{selectedCat.name}</span>
                  </div>
                </>
              )}
              {!selectedCat && "Select Cat"}
            </button>

            {showCatDropdown && (
              <div className="fixed top-[10vh] left-0 w-full grid place-items-center">

                  <div className=' h-8 w-[96%] md:w-[70%] lg:w-[60%] xl:w-[50%] flex justify-end items-center mb-1'>
                    <button className='rounded-[10px] bg-red-600 h-full px-4'
                      onClick={() => setShowCatDropdown(false)}
                    >
                      <AiOutlineClose />
                    </button>
                  </div>

                <div
                  className="bg-white text-gray-800 rounded-[20px] shadow-lg p-4 
                  w-[96%] md:w-[70%] lg:w-[60%] xl:w-[50%] overflow-auto h-[70vh] xl:overflow-hide
                "
                >
                  <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
                    {catData.map((cat: ICat) => (
                      <div
                        key={cat.name}
                        className="cursor-pointer"
                        onClick={() => handleCatSelect(cat)}
                      >
                        <CatDetails cat={cat} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;