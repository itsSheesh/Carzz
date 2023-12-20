// ========== components ========== \\
import LeftArrow from "../Icons/LeftArrow";

const MoreinfoButton: React.FC = (): JSX.Element => {
  return (
    <button className="flex p-2 border rounded-md bg-white text-[#684FAE]">
      <LeftArrow />
      <p className="font-bold">MORE DETAILS</p>
    </button>
  );
};

export default MoreinfoButton;
