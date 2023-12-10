// ========== packages ========== \\
import { useState } from "react";
// ========== components ========== \\
import { models } from "../../../../data/models";
import SubItem from "../subItem";

interface IBrand {
    id: number,
    name: string,
    country?: string,
    logo: string
}

interface IModel {
    id: number,
    name: string
}

const Item: React.FC<IBrand> = ({ id, name, logo }): JSX.Element => {
    const [selectedModels, setSelectedModels] = useState<IModel[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    const handleFetchModels = (brandID: number) => {
        const selectedModels = models.filter((model) => {
            return model.brand_id === Number(brandID)
        })
        setOpen(!open)
        setSelectedModels(selectedModels[0].models)
    }

    return (
        <div key={id} className="flex flex-col mx-5 mt-5" onClick={() => handleFetchModels(id)}>
            <div className="flex cursor-pointer">
                <img width={20} src={logo} alt={name} />
                <h1 className="ml-2 font-bold">{name}</h1>
            </div>
            {open && <SubItem models={selectedModels} />}
        </div>
    );
};

export default Item;
