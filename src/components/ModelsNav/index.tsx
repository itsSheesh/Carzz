interface Model {
  id : number;
  name : string;
}
interface ModelGroup {
  brand_id : number;
  models : Model[]
}

interface ModelsNavProps {
  selectedBrand: {id: number, name:string} | null
  models: ModelGroup[]
}


const ModelsNav:React.FC<ModelsNavProps> = ({selectedBrand, models}):JSX.Element => {
  return (
    <div className="h-[80px] flex items-center justify-center">
      {selectedBrand ? (
        <div>
          <h3>Models for {selectedBrand.name}</h3>
          <ul>
            {models
              .filter((modelGroup) => modelGroup.brand_id === selectedBrand?.id)
              .map((modelGroup) =>
                modelGroup.models.map((model) => (
                  <li key={model.id}>{model.name}</li>
                ))
              )}
          </ul>
        </div>
      ) : (
        <p>Please select a brand from the sidebar</p>
      )}
    </div>
  )
}

export default ModelsNav