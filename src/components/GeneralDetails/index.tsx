// ========== packages ========== \\
import React, { useContext, useEffect, useState } from "react";

// ========== data ========== \\
import { cars } from "../../data/cars";

// ========== interfaces ========== \\
import { ICar } from "../../interfaces/car";

// ========== components & interfaces ========== \\
import { ModelsContext } from "../../context/ModelContext";

const GeneralDetails: React.FC = (): JSX.Element => {
  const { BrandId, ModelId } = useContext(ModelsContext);
  const [selectedCar, setSelectedCar] = useState<ICar | undefined>(undefined);
  useEffect(() => {
    for (let i = 0; i < cars.length; i++) {
      const car = cars[i];
      if (car.model_id === ModelId && car.brand_id === BrandId) {
        setSelectedCar(car);
        break;
      }
    }
  }, [BrandId, ModelId]);
  return (
    <div className="flex text-white opacity-50 md:space-x-10 space-x-4">
      <div>
        <h1>Horsepower</h1>
        <p>{selectedCar?.hp}</p>
      </div>
      <div>
        <h1>Gearbox</h1>
        <p>{selectedCar?.engine}</p>
      </div>
      <div>
        <h1>Year</h1>
        <p>{selectedCar?.year}</p>
      </div>
    </div>
  );
};

export default GeneralDetails;
