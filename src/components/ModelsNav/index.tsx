import { useContext } from 'react';
import { ModelsContext } from '../../context/ModelContext'

const ModelsNav:React.FC = ():JSX.Element => {
  const { models } = useContext(ModelsContext)

  return (
    <div className="h-[80px] flex items-center justify-center">

      {models.map((model) => {
        return (
          <div className='flex m-3 cursor-pointer'>
            <h1>{model.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default ModelsNav