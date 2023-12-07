// ========== components ========== \\
import MoreinfoButton from "../MoreinfoButton"
import GDetails from "../GDetails"

const Datails:React.FC = ():JSX.Element => {
  return (
    <div className="flex justify-around h-[100px] items-center">
        <MoreinfoButton />
        <GDetails />
    </div>
  )
}

export default Datails