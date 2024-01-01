/* eslint-disable @typescript-eslint/no-unused-vars */
// ========== packages ========== \\
import { createContext, useState } from "react";

interface Brand {
  id: number;
  name: string;
}
interface Brands {
  brands: Array<Brand>;
  handleBrand: (brand: Array<Brand>) => void;
}
const initValue = {
  brands: [],
  handleBrand: () => {},
};
export const BrandContext = createContext<Brands>(initValue);
interface IProps extends React.PropsWithChildren {}
const BrandContextProvider: React.FC<IProps> = ({ children }): JSX.Element => {
  const [brands, setBrands] = useState<Brand[]>(initValue.brands);

  const handleBrand = (brand: Brand[]) => {
    setBrands(brand);
  };
  return (
    <BrandContext.Provider value={{ brands, handleBrand }}>
      {children}
    </BrandContext.Provider>
  );
};

export default BrandContextProvider;
