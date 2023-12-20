/* eslint-disable @typescript-eslint/no-unused-vars */
// ========== packages ========== \\
import { useState, useContext } from "react";
// ========== components ========== \\
import { models } from "../../../../data/models";
import { ModelsContext } from "../../../../context/ModelContext";
import { Context } from "../../../../context/AppContext";
interface IBrand {
  id: number;
  name: string;
  country?: string;
  logo: string;
}

interface IModel {
  id: number;
  name: string;
}

const Item: React.FC<IBrand> = ({ id, name, logo }): JSX.Element => {
  const [selectedModels, setSelectedModels] = useState<IModel[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const { handleModel } = useContext(ModelsContext);
  const { toggleShow } = useContext(Context);
  const handleFetchModels = (brandID: number) => {
    const selectedModels = models.filter((model) => {
      return model.brand_id === Number(brandID);
    });
    setOpen(!open);
    setSelectedModels(selectedModels[0].models);
    handleModel(selectedModels[0].models);
  };

  return (
    <div
      data-testid="brand-item"
      key={id}
      className="flex flex-col mx-5 mt-5"
      onClick={() => handleFetchModels(id)}
    >
      <div className="flex cursor-pointer" onClick={toggleShow}>
        <img width={20} src={logo} alt={name} />
        <h1 className="ml-2 font-bold">{name}</h1>
      </div>
    </div>
  );
};

export default Item;
