// ========== packages ========== \\
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const CarDetails:React.FC = ():JSX.Element => {
    const {carId} = useParams()
    useEffect(() => {
        
        // fetch data here


    },[carId])
  return (
    <div className="font-bold flex justify-center items-center h-screen text-3xl">Selected Model Car id is : {carId}</div>
  )
}

export default CarDetails