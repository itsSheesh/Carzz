// ========== components ========== \\
import MoreinfoButton from "../Common/MoreinfoButton";
import GeneralDetails from "../GeneralDetails";

const Datails: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row md:px-20 justify-between py-4 items-center gap-6">
      <MoreinfoButton />
      <GeneralDetails />
    </div>
  );
};

export default Datails;
