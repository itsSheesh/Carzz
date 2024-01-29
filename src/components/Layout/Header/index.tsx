// ========== packages ========== \\
import React, { ChangeEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";

// ========== components & contexes ========== \\
import { Context } from "../../../context/AppContext";
import Input from "../../Common/Form/Input";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { ModelsContext } from "../../../context/ModelContext";

// ========== interfaces ========== \\
import { ICar } from "../../../interfaces/car";

// ========== data ========== \\
import { cars } from "../../../data/cars";

const Header: React.FC = (): JSX.Element => {
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any>([]);
  const { toggleShow } = useContext(Context);
  // const { handleDark } = useContext(DarkModeContext)
  const { isDark } = useContext(DarkModeContext);
  const { handleModelId, handleBrandId } = useContext(ModelsContext);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const filterd = cars.filter((car) => {
      return car.name?.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchResult(filterd);
  };
  const sendId = (Brand_id: number, Model_id: number) => {
    handleBrandId(Brand_id);
    handleModelId(Model_id);
  };

  return (
    <header
      className={`flex flex-col md:flex-row md:h-16 py-4 items-center md:px-20 px-4 ${
        isDark ? "bg-black" : "bg-[#5E46A3]"
      }  md:gap-40 gap-2`}
    >
      <Link to={"/"}>
        <div className="cursor-pointer font-RubikBubbles text-2xl text-white order-1">
          Carzz
        </div>
      </Link>
      <div className="grow md:order-2 order-4 flex justify-center">
        <Input
          className="outline-none w-full py-2 px-4 rounded-lg"
          placeholder="Search By Name ..."
          name="search"
          type="text"
          inputValue={query}
          onChange={(e) => {
            handleSearch(e);
          }}
        >
          {query && (
            <div className="absolute left-0 right-0 bg-white shadow-md rounded-md mt-1 p-2 max-h-80 overflow-auto">
              {searchResult.length > 0 ? (
                searchResult?.map((car: ICar) => {
                  return (
                    <Link to={`/${car.name}`}>
                      <p
                        onClick={() => sendId(car.brand_id, car.model_id)}
                        key={car.brand_id}
                        className="cursor-pointer mb-1 hover:bg-red-50 p-2 rounded-md"
                      >
                        {car.name}
                      </p>
                    </Link>
                  );
                })
              ) : (
                <p className="p-2">No Matches Found!</p>
              )}
            </div>
          )}
        </Input>
      </div>

      <div
        data-testid="siedbar-btn"
        className="cursor-pointer text-lg font-bold text-white order-3"
        onClick={toggleShow}
      >
        <Link to="/">Brands</Link>
      </div>

      {/* <button className={`${isDark ? 'text-white' : ''} absolute left-0`} onClick={() => handleDark()}>Dark</button> */}
    </header>
  );
};

export default Header;
