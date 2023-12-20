/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";

interface Model {
    id : number;
    name : string;
}
interface Models {
    models: Array<Model>;
    handleModel:(models:Array<Model>) => void;
}
const initValue = {
    models : [],
    handleModel: () => {}
}
export const ModelsContext = createContext<Models>(initValue);
interface IProps extends React.PropsWithChildren {

}
const ModelContextProvider:React.FC<IProps> = ({children}):JSX.Element => {
    const [models, setModels] = useState<Model[]>(initValue.models)
    
    const handleModel = (models:Model[])=> {
        setModels(models)
    }
  return (
    <ModelsContext.Provider value={{models, handleModel}}>
        { children }
    </ModelsContext.Provider>
  )
}

export default ModelContextProvider