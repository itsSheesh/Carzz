/* eslint-disable @typescript-eslint/no-unused-vars */
// ========== packages ========== \\
import { createContext, useState } from "react";

interface Model {
  id: number;
  name: string;
}
interface Models {
  models: Array<Model>;
  BrandId: number | undefined;
  ModelId: number | undefined;
  handleModel: (models: Array<Model>) => void;
  handleBrandId: (id: number) => void;
  handleModelId: (id: number) => void;
}
const initValue = {
  models: [],
  BrandId: undefined,
  ModelId: undefined,
  handleModel: () => {},
  handleBrandId: () => {},
  handleModelId: () => {},
};
export const ModelsContext = createContext<Models>(initValue);
interface IProps extends React.PropsWithChildren {}
const ModelContextProvider: React.FC<IProps> = ({ children }): JSX.Element => {
  const [models, setModels] = useState<Model[]>(initValue.models);
  const [BrandId, setId] = useState<number | undefined>(undefined);
  const [ModelId, setModelId] = useState<number | undefined>(undefined);

  const handleModel = (models: Model[]) => {
    setModels(models);
  };

  const handleBrandId = (id: number) => {
    setId(id);
  };

  const handleModelId = (id: number) => {
    setModelId(id);
  };

  return (
    <ModelsContext.Provider
      value={{
        models,
        handleModel,
        BrandId,
        handleBrandId,
        ModelId,
        handleModelId,
      }}
    >
      {children}
    </ModelsContext.Provider>
  );
};

export default ModelContextProvider;
