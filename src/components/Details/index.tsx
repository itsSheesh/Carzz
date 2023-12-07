// ========== components ========== \\
import MoreinfoButton from "../Common/MoreinfoButton"
import GDetails from "../GeneralDetails"

const Datails:React.FC = ():JSX.Element => {
  return (
    <div className="flex justify-around h-[100px] items-center">
        <MoreinfoButton />
        <GDetails />
    </div>
  )
}

export default Datails