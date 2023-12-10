// ========== packages ========== \\
import { useContext } from "react";
// ========== components ========== \\
import { Context } from "../../../../context/AppContext";

interface IModel {
    id: number,
    name: string
}

interface IProps {
    models: IModel[]
}

const SubItem: React.FC<IProps> = ({models}): JSX.Element => {
    const { toggleShow } = useContext(Context);

    const handleSelectModel = (modelID: number) => {
        toggleShow()
        console.log(modelID)
    }

    return (
        <div className="flex flex-col mt-4 gap-2 indent-8 cursor-pointer">
        {models?.map((model:IModel) => {
            return (
                <div key={model.id} onClick={() => handleSelectModel(model.id)}>
                    {model.name}
                </div>
            )
        })}
    </div>
    );
};

export default SubItem;
