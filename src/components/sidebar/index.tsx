/* eslint-disable @typescript-eslint/no-unused-vars */
// ========== packages ========== \\
import { useContext, useState } from "react";

// ========== components ========== \\
import { Context } from "../../context/AppContext";
import RightArrow from "../Common/Icons/RightArrow";
import List from "../Common/List";
import { brands } from "../../data/brands";
import { ModelsContext } from "../../context/ModelContext";


const Sidebar: React.FC = (): JSX.Element => {
  const { sidebar, toggleShow } = useContext(Context);
  const [selectedBrand, setSelectedBrand] = useState <string| null>(null)
  
  const handleBrandSelect = (brandName: string) => {
    setSelectedBrand(brandName)
  }

  return (
    // <>
    //   {sidebar && (
        <div
          data-testid="sidebar"
          className={`flex flex-col fixed w-full md:w-[350px] bg-white right-0 top-0 h-full shadow-lg ease-in-out duration-200 z-10
         ${sidebar ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="bg-gray-200 flex justify-between py-5 px-4">
            <span className="cursor-pointer" onClick={toggleShow}>
              <RightArrow />
            </span>
            <span className="pr-3">Car Brands</span>
          </div>
          <List brands={brands} onBrandSelect={handleBrandSelect} />
        </div>
      // )}
  //   </>
  );
};

export default Sidebar;
