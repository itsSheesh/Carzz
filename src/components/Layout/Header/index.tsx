// ========== packages ========== \\
import React, { ChangeEvent, useContext, useState } from "react";
import cars from "../../../data/cars.json";
import { ICar } from "../../../interfaces/car";

// ========== components ========== \\
import { Context } from "../../../context/AppContext";
import Input from "../../Common/Form/Input";

const Header: React.FC = (): JSX.Element => {
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any>([]);
  const { toggleShow } = useContext(Context);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const filterd = cars.car.filter((car) => {
      return car.name?.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchResult(filterd);
  };

  return (
    <header className="flex flex-col md:flex-row md:h-16 py-4 items-center md:px-20 px-4 bg-[#5E46A3] md:gap-40 gap-2">
      <div className="cursor-pointer font-RubikBubbles text-2xl text-white order-1">
        Carzz
      </div>
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
                  return <p className="cursor-pointer mb-1 hover:bg-red-50 p-2 rounded-md">{car.name}</p>;
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
        Brands
      </div>
    </header>
  );
};

export default Header;
