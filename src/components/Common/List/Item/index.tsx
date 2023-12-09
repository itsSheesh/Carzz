// ========== packages ========== \\
import { useState, useContext } from "react";
// ========== components ========== \\
import { models } from "../../../../data/models";
import { Context } from "../../../../context/AppContext";

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
    const [selectedModels, setSelectedModels] = useState<IModel[]>();
    const [open, setOpen] = useState<boolean>(false);
    const { toggleShow } = useContext(Context);

    const handleFetchModels = (brandID: number) => {
        const selectedModels = models.filter((model) => {
            return model.brand_id === Number(brandID)
        })
        setOpen(!open)
        setSelectedModels(selectedModels[0].models)
    }

    const handleSelectModel = (modelID: number) => {
        toggleShow()
        console.log(modelID)
    }

    return (
        <div key={id} className="flex flex-col mx-5 mt-5" onClick={() => handleFetchModels(id)}>
            <div className="flex cursor-pointer">
                <img width={20} src={logo} alt="" />
                <h1 className="ml-2 font-bold">{name}</h1>
            </div>

            {open ?
                <div className="flex flex-col mt-4 gap-2 indent-8 cursor-pointer">
                    {open && selectedModels?.map((model) => {
                        return (
                            <div key={model.id} onClick={() => handleSelectModel(model.id)}>
                                {model.name}
                            </div>
                        )
                    })}
                </div>
                : null
            }
        </div>
    );
};

export default Item;
