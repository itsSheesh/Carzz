// ========== components ========== \\
import MoreinfoButton from "../Common/MoreinfoButton"
import GDetails from "../GeneralDetails"

const Datails:React.FC = ():JSX.Element => {
  return (
    <div className="flex px-20 justify-between py-4 items-center">
        <MoreinfoButton />
        <GDetails />
    </div>
  )
}

export default Datails