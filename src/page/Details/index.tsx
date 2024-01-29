/* eslint-disable @typescript-eslint/no-unused-vars */
// ========== packages ========== \\
import React, { useContext, useEffect, useState } from "react";

// ========== components & contexes ========== \\
import { ModelsContext } from "../../context/ModelContext";

// ========== data ========== \\
import { cars } from "../../data/cars";

// ========== interfaces ========== \\
import { ICar } from "../../interfaces/car";

const CarDetails: React.FC = (): JSX.Element => {
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
    <div className="h-screen flex justify-center items-center flex-col gap-5 font-bold text-3xl">
      <div>Brand name: {selectedCar?.name}</div>
      <div>Model: {selectedCar?.model}</div>
      <div>Country: {selectedCar?.country}</div>
      <div>Description: {selectedCar?.description} </div>
      <div>Year: {selectedCar?.year} </div>
      <div>HP: {selectedCar?.hp} </div>
      <div>Torque: {selectedCar?.torque} </div>
      <div>Transmission: {selectedCar?.transmission} </div>
      <div>Top Speed: {selectedCar?.topSpeed} </div>
      <div>Engine: {selectedCar?.engine} </div>
      <div>Width: {selectedCar?.size.width} </div>
      <div>Height: {selectedCar?.size.height} </div>
      <div>Length: {selectedCar?.size.length}</div>
    </div>
  );
};

export default CarDetails;
